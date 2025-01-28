import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EnterPasswordScreen = () => {
  const [password, setPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const actualPassword = 'mypassword123'; // 사용자의 실제 비밀번호
  const isPasswordEntered = password.length > 0;

  // const handleSubmit = () => {
  //   if (password === actualPassword) {
  //     setErrorMessage('');
  //     navigation.navigate('ConfirmDeletion'); // 다음 화면으로 이동
  //   } else {
  //     setErrorMessage('비밀번호가 일치하지 않습니다');
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비밀번호 입력</Text>

      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해주세요"
        placeholderTextColor="#C4C4C4"
        secureTextEntry={true}  // 비밀번호 입력을 점으로 표시
        value={password}  // 상태 값 연결
        onChangeText={(text) => {
          setPassword(text);
          setErrorMessage(''); // 입력 중에는 에러 메시지 제거
        }}
        keyboardType="default"  // 텍스트 입력 시 일반 키보드 사용
      />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text> // 에러 메시지 표시
      ) : null}

      <TouchableOpacity
        style={[
          styles.submitButton,
          { backgroundColor: isPasswordEntered ? '#04AD45' : '#C4C4C4' } // 입력 여부에 따라 버튼 색 변경
        ]}
        // onPress={handleSubmit}
        disabled={!isPasswordEntered}
      >
        <Text style={styles.submitButtonText}>완료</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1A1',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    marginBottom: 20,
    color: 'black',
  },
  errorText: {
    color: '#04AD45',
    fontSize: 12,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#04AD45',
    borderRadius: 8,
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

export default EnterPasswordScreen;