import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NicknameCheckScreen = () => {
  const [userId, setUserId] = useState('');
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(null); // 중복 확인 상태
  const [isIdChecked, setIsIdChecked] = useState(false); // 아이디 확인 완료 여부
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false); // 비밀번호 유효성 검사 여부
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false); // 비밀번호 확인 여부

  const checkDuplicate = async () => {
    try {
      // 서버에 아이디 중복 확인 요청 (API 예시)
      const response = await fetch('https://example.com/api/check-duplicate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      setIsDuplicate(data.isDuplicate);
      setIsIdChecked(true); // 아이디 확인 완료
    } catch (error) {
      console.error('중복 확인 에러:', error);
    }
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

  // 제목을 동적으로 설정하는 부분
  const getTitle = () => {
    if (!isIdChecked) {
      return "아이디를 입력해주세요";
    }
    else {
      return "비밀번호를 입력해주세요";
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>02 정보 입력</Text>
      <Text style={styles.title}>{getTitle()}</Text>

      <View style={styles.inputRow}>
        <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="아이디를 입력해주세요"
            value={userId}
            onChangeText={setUserId}
        />
        <TouchableOpacity
            style={[
                styles.button,
                {
                  backgroundColor: isIdChecked && !isDuplicate ? '#B0B0B0' : '#04AD45', // 중복되지 않으면 회색
                },
              ]}
            onPress={checkDuplicate}
            disabled={!userId.trim() || isIdChecked}// 아이디가 비어 있으면 버튼 비활성화
        >
            <Text style={styles.buttonText}>
                {isIdChecked ? '확인 완료' : '중복 확인'}
            </Text>
        </TouchableOpacity>
        {isDuplicate !== null && (
            <Text style={isDuplicate ? styles.duplicateText : styles.availableText}>
            {isDuplicate ? '이미 존재하는 닉네임입니다' : '멋진 닉네임이군요!'}
            </Text>
        )}
      </View>

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
        <TouchableOpacity style={styles.submitButton}>
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
