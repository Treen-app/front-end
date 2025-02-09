import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from 'axios';
import type { StackNavigationProp } from '@react-navigation/stack';
import { signUpStackParamList } from '../types/signUpNavigationTypes';  // RootStackParamList를 정의하여 Stack Param List를 관리
import Config from 'react-native-config';

type SignUpAgreeScreenNavigationProp = StackNavigationProp<signUpStackParamList, 'SignUpAgree'>;

interface Props {
  navigation: SignUpAgreeScreenNavigationProp;
}
const EnterPhoneNumberScreen: React.FC<Props> = ({ navigation }) => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [remainingTime, setRemainingTime] = useState(300); // 5분 타이머 (초 단위)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  // 인증번호 요청
  const sendSmsRequest = async () => {
    try {
      const requestPayload = {
        phoneNum: phoneNumber, // 여기에 실제 전화번호를 넣어주세요.
      };

      const response = await axios.post(`${Config.SERVER}/api/auth/sms/send`, requestPayload);

      if (response.status === 200) {
        setIsCodeSent(true);
        console.log('인증번호 전송 성공');
      }
    } catch (error) {
      console.error('인증번호 전송 실패', error);
    }
  };

  // 인증번호 요청
  const smsVertification = async () => {
    try {
      const requestPayload = {
        phone: phoneNumber,
        certificationNumber: verificationCode, 
      };

      const response = await axios.post('http://localhost:8080/api/auth/sms/confirm', requestPayload);

      if (response.data === 'SMS_CERTIFICATION_SUCCESS') {
        setIsCodeSent(true);
        console.log('인증번호 확인 성공');
        navigation.navigate('IDCheck', {phoneNumber});
      }
    } catch (error) {
      console.error('인증번호 확인 실패', error);
    }
  };


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCodeSent && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCodeSent, remainingTime]);

  const handleSendCode = () => {
    setIsCodeSent(true);
    setRemainingTime(300); // 타이머 초기화
  };

  const formatTime = (time: number) :string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

      <Text style={styles.subtitle}>01 본인인증</Text>
      <Text style={styles.title}>전화번호를 입력해주세요</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="010-1234-5678"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          editable={!isCodeSent}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendSmsRequest}
          disabled={!phoneNumber}
        >
          <Text style={styles.sendButtonText}>
            {isCodeSent ? '재전송' : '문자 전송'}
          </Text>
        </TouchableOpacity>
      </View>

      {isCodeSent && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputWithTimer}
            placeholder="인증번호 6자리를 입력해주세요"
            keyboardType="number-pad"
            value={verificationCode}
            onChangeText={setVerificationCode}
          />
          <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
        </View>
      )}

      {isCodeSent && (
        <TouchableOpacity style={styles.completeButton} onPress={smsVertification}>
          <Text style={styles.completeButtonText}>완료</Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1A1',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#04AD45',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row', // 수평으로 정렬
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    marginBottom: 40,
  },
  inputWithTimer: {
    flex: 1, // 남은 공간을 차지
    fontSize: 14,
  },
  timerText: {
    color: '#A1A1A1', // 회색 글씨
    fontSize: 14,
    marginLeft: 10, // 입력 필드와 시간 간격
  },
  completeButton: {
    backgroundColor: '#04AD45',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EnterPhoneNumberScreen;
