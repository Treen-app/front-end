import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const IDCheckScreen = () => {
  const [userId, setUserId] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(null); // null: 초기 상태, true: 중복, false: 사용 가능
  const [password, setPassword] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false); // 아이디 확인이 완료되었는지 상태 관리

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
            {isDuplicate ? '이미 존재하는 아이디입니다' : '사용 가능한 아이디입니다'}
            </Text>
        )}
      </View>
      
      {isIdChecked && !isDuplicate && (
        <View style={styles.input}>
          <TextInput
            style={styles.input}
            placeholder="비밀번호 입력"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
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
    marginTop: 10,
  },
  availableText: {
    color: 'green',
    marginTop: 10,
  },
});

export default IDCheckScreen;
