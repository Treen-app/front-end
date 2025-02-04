import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FindIdScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  // 전화번호 포맷팅 함수
  // const formatPhoneNumber = (number: string): string => {
  //   // 숫자만 추출
  //   const cleaned = ('' + number).replace(/\D/g, '');

  //   // 전화번호 포맷: 010-1111-2222 형식
  //   if (cleaned.length < 4) {
  //     return cleaned;
  //   } else if (cleaned.length < 7) {
  //     return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  //   } else {
  //     return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7, 11)}`;
  //   }
  // };

  // const handlePhoneNumberChange = (text: string) => {
  //   const formattedText = formatPhoneNumber(text);
  //   setPhoneNumber(formattedText);
  // }; // 왜 작동이 안 되지..

  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>
        가입 시 입력한 정보를 입력해주세요.
      </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={styles.input}
            placeholder="이름을 입력하세요"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>전화번호</Text>
          <TextInput
            style={styles.input}
            placeholder="전화번호를 입력하세요"
          keyboardType="phone-pad" // 전화번호에 적합한 자판
          />
        </View>
      

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>아이디 찾기</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1A1',
    // marginTop: 40,
    marginBottom: 40,
    paddingHorizontal: 10
  },
  inputContainer: {
    // marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    position: 'relative',
  },
  label: {
    textAlign: "left",
    position: "absolute",
    left: 10,
    top: 15,
    fontSize: 14,
    fontWeight: "bold"
  },
  input: {
    width: "80%",
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 14,
    fontSize: 14,
    marginBottom: 15,
    marginLeft: 70
  },
  submitButton: {
    backgroundColor: '#04AD45',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 12,
    color: '#A1A1A1',
    textAlign: 'center',
  },
});

export default FindIdScreen;
