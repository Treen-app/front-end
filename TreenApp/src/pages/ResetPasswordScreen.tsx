import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>비밀번호 재설정</Text>
      <Text style={styles.title}>새로운 비밀번호를 입력해주세요</Text>

      <TextInput
        style={styles.input}
        placeholder="새 비밀번호 입력"
        placeholderTextColor="#C4C4C4"
        secureTextEntry={true}  // 비밀번호 입력을 점으로 표시
        value={password}  // 상태 값 연결
        onChangeText={setPassword}  // 텍스트 변경 시 상태 업데이트
        keyboardType="default"  // 텍스트 입력 시 일반 키보드 사용
      />
      <TextInput
        style={styles.input}
        placeholder="새 비밀번호 확인"
        placeholderTextColor="#C4C4C4"
        secureTextEntry={true}  // 비밀번호 확인을 점으로 표시
        value={confirmPassword}  // 상태 값 연결
        onChangeText={setConfirmPassword}  // 텍스트 변경 시 상태 업데이트
        keyboardType="default"  // 텍스트 입력 시 일반 키보드 사용
      />
      <TouchableOpacity style={styles.submitButton}>
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
  backButton: {
    marginRight: 10, // 버튼과 제목 사이 간격
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
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    fontSize: 14,
    marginBottom: 20,
    color: 'black',
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

export default ResetPasswordScreen;
