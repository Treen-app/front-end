import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FindIdScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>
        <Text style={styles.greenText}>아이디 찾기</Text>
      </Text>

      <Text style={styles.subtitle}>
        가입 시 입력한 정보를 입력해주세요.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="이름"
      />
      <TextInput
        style={styles.input}
        placeholder="전화번호"
      />

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
  backButton: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  greenText: {
    color: '#04AD45',
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1A1',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#04AD45',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
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
