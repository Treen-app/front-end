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

const UpdatePhoneNumberScreen = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [remainingTime, setRemainingTime] = useState(300); // 5분 타이머 (초 단위)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

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

      <Text style={styles.subtitle}>휴대폰 번호 수정</Text>
      <Text style={styles.title}>새로운 전화번호를 입력해주세요</Text>

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
          onPress={handleSendCode}
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
        <TouchableOpacity style={styles.completeButton}>
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

export default UpdatePhoneNumberScreen;
