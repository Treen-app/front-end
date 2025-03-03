import React, { useState } from 'react';
import { KakaoOAuthToken, login as kakaoLogin } from '@react-native-seoul/kakao-login';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const googleLoginUrl =
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${Config.GOOGLE_CLIENT_ID}&redirect_uri=${Config.GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`;

  const naverLoginUrl =
    `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${Config.NAVER_CLIENT_ID}&state=NAVER_STATE_STRING&redirect_uri=${Config.NAVER_REDIRECT_URI}`;

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('로그인 실패', '아이디와 비밀번호를 입력해주세요.');
      return;
    }

    try {
      const response = await fetch(`${Config.API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('accessToken', data.token);
        Alert.alert('로그인 성공', `환영합니다, ${data.name}!`);
        navigation.navigate('Home');
      } else {
        Alert.alert('로그인 실패', data.message || '아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (err) {
      Alert.alert('오류', '서버와의 연결에 문제가 발생했습니다.');
    }
  };

  const handleKakaoLogin = async () => {
    try {
      const token: KakaoOAuthToken = await kakaoLogin();
      const response = await fetch(`${Config.API_BASE_URL}/auth/kakao`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessToken: token.accessToken }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('accessToken', data.token);
        Alert.alert('카카오 로그인 성공', `환영합니다, ${data.name}!`);
        navigation.navigate('Home');
      } else {
        Alert.alert('카카오 로그인 실패', data.message || '로그인에 실패했습니다.');
      }
    } catch (error) {
      Alert.alert('로그인 실패', '카카오 로그인 중 오류가 발생했습니다.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await Linking.openURL(googleLoginUrl);
    } catch (error) {
      Alert.alert('로그인 실패', '구글 로그인 중 오류가 발생했습니다.');
    }
  };

  const handleNaverLogin = async () => {
    try {
      await Linking.openURL(naverLoginUrl);
    } catch (error) {
      Alert.alert('로그인 실패', '네이버 로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="arrow-back" size={24} color="black" style={{ marginTop: 40 }} />
      </TouchableOpacity>
      <Text style={styles.title}>
        <Text style={styles.greenText}>트린</Text>에 오신 것을{"\n"}환영합니다!
      </Text>

      <Text style={styles.subtitle}>로그인하여 트린의 모든 기능을 이용해보세요!</Text>

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
        <TouchableOpacity onPress={handleKakaoLogin}>
          <Image source={require('../img/kakaotalk.png')} style={styles.snsIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNaverLogin}>
          <Image source={require('../img/naver.png')} style={styles.snsIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleLogin}>
          <Image source={require('../img/google.png')} style={styles.googleIcon} />
        </TouchableOpacity>
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
