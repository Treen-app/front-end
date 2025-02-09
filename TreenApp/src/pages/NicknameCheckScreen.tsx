import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { signUpStackParamList } from '../types/signUpNavigationTypes';  // RootStackParamList를 정의하여 Stack Param List를 관리
import Config from 'react-native-config';

type SignUpAgreeScreenNavigationProp = StackNavigationProp<signUpStackParamList, 'SignUpAgree'>;

interface Props {
  navigation: SignUpAgreeScreenNavigationProp;
}

const NicknameCheckScreen: React.FC<Props> = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(null); // 중복 확인 상태
  const [isUserNameChecked, setIsUserNameChecked] = useState(false); // 아이디 확인 완료 여부

  const checkDuplicate = async () => {
    try {
      // 서버에 닉네임 중복 확인 요청
      const response = await fetch(`${Config.SERVER}/api/auth/userName/isDuplicate/${userName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`서버 응답 에러: ${response.status}`);
      }
  
      // 서버 응답 데이터를 JSON으로 변환
      const isDuplicate = await response.json();
      console.log("isDuplicate response: " + isDuplicate);
  
      // 중복 여부를 상태에 저장
      setIsDuplicate(isDuplicate); // true or false
      setIsUserNameChecked(true); // 아이디 확인 완료
    } catch (error) {
      console.error('중복 확인 에러:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>02 정보 입력</Text>
      <Text style={styles.title}>닉네임을 입력해주세요</Text>

      <View style={styles.inputRow}>
        <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="닉네임을 입력해주세요"
            value={userName}
            onChangeText={setUserName}
        />
        <TouchableOpacity
            style={[
                styles.button,
                {
                  backgroundColor: isUserNameChecked && !isDuplicate ? '#B0B0B0' : '#04AD45', // 중복되지 않으면 회색
                },
              ]}
            onPress={checkDuplicate}
            disabled={!userName.trim() || isUserNameChecked}// 아이디가 비어 있으면 버튼 비활성화
        >
            <Text style={styles.buttonText}>
                {isUserNameChecked ? '확인 완료' : '중복 확인'}
            </Text>
        </TouchableOpacity>
      </View>
      {isDuplicate !== null && (
          <Text style={isDuplicate ? styles.duplicateText : styles.availableText}>
          {isDuplicate ? '이미 존재하는 닉네임입니다' : '멋진 닉네임이군요!'}
          </Text>
      )}

      { !isDuplicate &&(
        <TouchableOpacity style={styles.submitButton} 
        onPress={() => navigation.navigate('CompleteSignup')}>
          <Text style={styles.submitButtonText}>완료</Text>
        </TouchableOpacity>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 35,
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1A1',
    marginBottom: 10,
    marginTop: 20
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#04AD45',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginBottom: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  duplicateText: {
    color: 'red',
    marginTop: 10,
  },
  availableText: {
    color: 'green',
    marginTop: 10,
  },
  passwordRow: {
    marginBottom: 10,
  },
  passwordError: {
    color: '#04AD45',
    fontSize: 12,
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#04AD45',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 30
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NicknameCheckScreen;
