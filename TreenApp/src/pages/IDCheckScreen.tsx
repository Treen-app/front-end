import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { signUpStackParamList } from '../types/signUpNavigationTypes';  // RootStackParamList를 정의하여 Stack Param List를 관리
import Config from 'react-native-config';

type SignUpAgreeScreenNavigationProp = StackNavigationProp<signUpStackParamList, 'SignUpAgree'>;

interface Props {
  navigation: SignUpAgreeScreenNavigationProp;
}

const IDCheckScreen: React.FC<Props> = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(null); // null: 초기 상태, true: 중복, false: 사용 가능
  const [password, setPassword] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false); // 아이디 확인이 완료되었는지 상태 관리
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false); // 비밀번호 유효성 검사 여부
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false); // 비밀번호 확인 여부

  const checkDuplicate = async (id: string) => {
    try {
      // 중복 확인 전 상태 초기화
      setIsIdChecked(false);
      setIsDuplicate(null);

      // 서버에 아이디 중복 확인 요청
      const response = await fetch(`${Config.SERVER}/api/auth/loginId/isDuplicate/${id}`, {
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
      setIsIdChecked(true); // 아이디 확인 완료
    } catch (error) {
      console.error('중복 확인 에러:', error);
    }
  };

  const resetCheck = () => {
    setIsIdChecked(false);
    setIsDuplicate(null);
  };
  
  // 비밀번호 유효성 검사 함수
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    setIsPasswordValid(passwordRegex.test(password)); // 비밀번호가 유효한지 확인
  };

  // 비밀번호 확인
  const handlePasswordConfirm = (confirmPassword: string) => {
    setPasswordConfirm(confirmPassword);
    // 비밀번호 확인 값과 최초 비밀번호 값이 일치하는지 비교
    setIsPasswordConfirmed(password === confirmPassword); 
  };


  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>정보 입력</Text>
      <Text style={styles.title}>
        {isIdChecked && !isDuplicate ? '비밀번호를 입력해주세요' : '아이디를 입력해주세요'}
      </Text>

      <View style={styles.inputRow}>
        <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="아이디 입력"
            value={userId}
            onChangeText={(text) => {
              setUserId(text);
              resetCheck(); // 아이디 입력 시 중복 확인 상태 초기화
            }}
        />
        <TouchableOpacity
            style={[
                styles.button,
                {
                  backgroundColor: isIdChecked && !isDuplicate ? '#B0B0B0' : '#04AD45', // 중복되지 않으면 회색
                },
              ]}
            onPress={() => checkDuplicate(userId)}
            disabled={!userId.trim() || isIdChecked}// 아이디가 비어 있으면 버튼 비활성화
        >
            <Text style={styles.buttonText}>
                중복 확인
            </Text>
        </TouchableOpacity>
      </View>
      {isDuplicate !== null && (
        <Text style={isDuplicate ? styles.duplicateText : styles.availableText}>
          {isDuplicate ? '이미 존재하는 아이디입니다' : '사용 가능한 아이디입니다'}
        </Text>
      )}
      
      {isIdChecked && !isDuplicate && (
        <View>
          {/* 비밀번호 입력 */}
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.input}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChangeText={(text) => {
                validatePassword(text); // 비밀번호 유효성 검사
                setPassword(text);
              }}
              secureTextEntry
            />
            {password && !isPasswordValid && (
              <Text style={styles.passwordError}>
                비밀번호는 영어(대문자, 소문자 구분), 숫자, 특수문자를 포함하여 8~16자 이어야 합니다.
              </Text>
            )}
          </View>

          {isPasswordValid && (
            <View style={styles.passwordRow}>
              {/* 비밀번호 확인 입력 */}
              <TextInput
                style={styles.input}
                placeholder="비밀번호 확인"
                value={passwordConfirm}
                onChangeText={(text) => {
                  handlePasswordConfirm(text)
                }}
                secureTextEntry
              />
             {passwordConfirm && !isPasswordConfirmed && (
              <Text style={styles.passwordError}>비밀번호가 일치하지 않습니다.</Text>
            )}
            </View>
          )}
        </View>
      )}

      {isPasswordValid && !isDuplicate && isPasswordValid && isPasswordConfirmed &&(
        <TouchableOpacity style={styles.submitButton} 
        onPress={() => navigation.navigate('NicknameCheck')}>
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
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#04AD45',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginBottom: 10,
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
    fontSize: 12,
    bottom: 14,
    left: 3
  },
  availableText: {
    color: 'green',
    fontSize: 12,
    bottom: 14,
    left: 3
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

export default IDCheckScreen;
