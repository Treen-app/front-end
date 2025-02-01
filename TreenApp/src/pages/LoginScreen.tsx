import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const Naver = () => {
//     const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID; // 발급받은 클라이언트 아이디
//     const REDIRECT_URI = "http://localhost:3000/oauth"; // Callback URL
//     const STATE = "flase";
//     const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
  
//     const NaverLogin = () => {
//       window.location.href = NAVER_AUTH_URL;
//     };
  
//     return <button onClick={NaverLogin}>네이버 로그인</button>;
// };

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 버튼 클릭 시 실행
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('로그인 실패', '아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('로그인 성공', `환영합니다, ${data.name}!`);
      } else {
        const error = await response.json();
        Alert.alert('로그인 실패', error.message || '아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (err) {
      Alert.alert('오류', '서버와의 연결에 문제가 발생했습니다.');
    }
  };
  
   return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="arrow-back" size={24} color="black" style={{marginTop: 40}} />
      </TouchableOpacity>
      <Text style={styles.title}>
        <Text style={styles.greenText}>트린</Text>에 오신 것을{"\n"}환영합니다!
      </Text>

      <Text style={styles.subtitle}>
        로그인하여 트린의 모든 기능을 이용해보세요!
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="아이디 입력" 
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>로그인</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <Text style={styles.linkText}>아이디 찾기</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.linkText}>비밀번호 재설정</Text>
        <Text style={styles.separator}>|</Text>
        <Text style={styles.linkTextSignIn}>회원가입</Text>
      </View>

      <Text style={styles.snsText}>SNS 간편로그인</Text>

      <View style={styles.snsIconsContainer}>
        <Image
          source={require('../img/kakaotalk.png')} style={styles.snsIcon}
        />
        <Image
          source={require('../img/naver.png')} style={styles.snsIcon}
        />
        <Image
          source={require('../img/google.png')} style={styles.googleIcon}
        />
        <View style={styles.mailIconContainer}>
          <Icon 
            name="mail-outline" 
            color="white" 
            size={25} 
          />
        </View>
      </View>
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
    marginTop: 50
  },
  greenText: {
    color: '#04AD45',
  },
  subtitle: {
    fontSize: 14,
    color: '#A1A1A1',
    marginBottom: 55,
  },
  mailIconContainer: {
    width: 40, 
    height: 40,
    borderRadius: 20, 
    backgroundColor: '#AAAAAA',
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    fontSize: 14,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#04AD45',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
  },
  linkText: {
    fontSize: 12,
    color: '#5A5A5A',
    marginHorizontal: 5,
    marginTop: 2,
  },
  linkTextSignIn: {
    fontSize: 12,
    color: '#5A5A5A',
    marginHorizontal: 5,
    marginTop: 3
  },
  separator: {
    fontSize: 14,
    color: '#C8C8C8',
  },
  snsText: {
    fontSize: 12,
    color: '#A1A1A1',
    textAlign: 'center',
    marginBottom: 18,
  },
  snsIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  snsIcon: {
    marginHorizontal: 10,
    width: 40,
    height: 40
  },
  googleIcon: {
    marginHorizontal: 10,
    width: 37,
    height: 37,
    marginTop: 2
  },
});

export default LoginScreen;
