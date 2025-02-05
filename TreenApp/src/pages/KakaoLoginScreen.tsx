import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';

const KakaoLoginScreen = () => {
  const [showWebView, setShowWebView] = useState(false);
  const KAKAO_AUTH_URL =
    'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=188b142dcd4939b3fceb9cbef82edfd7&redirect_uri=http://localhost:3000/login/oauth2/kakao&prompt=none';

  // WebView URL 변경 감지
  const handleNavigationStateChange = (event: WebViewNavigation) => {
    if (event.url.includes('http://localhost:3000/login/oauth2/kakao')) {
      const codeMatch = event.url.match(/code=([^&]*)/); // URL에서 'code' 파라미터 추출
      if (codeMatch) {
        const code = codeMatch[1];
        setShowWebView(false); // WebView 닫기
        Alert.alert('인가 코드 수신', `Code: ${code}`);

        // Kakao 토큰 요청
        fetchKakaoToken(code);
      }
    }
  };

  const fetchKakaoToken = async (code: string) => {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('client_id', '188b142dcd4939b3fceb9cbef82edfd7');
      params.append('redirect_uri', 'http://localhost:3000/login/oauth2/kakao');
      params.append('code', code);

      // Kakao 토큰 요청
      const tokenResponse = await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        body: params.toString(),
      });

      if (!tokenResponse.ok) throw new Error('Kakao 토큰 요청 실패');
      const tokenData = await tokenResponse.json();
      console.log('Kakao 토큰 데이터:', tokenData);

    //   // 백엔드에 로그인 요청
    //   const backendResponse = await fetch('http://localhost:8080/login/oauth/kakao', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ accessToken: tokenData.access_token }),
    //   });

    //   if (!backendResponse.ok) throw new Error('백엔드 로그인 요청 실패');
    //   const backendData = await backendResponse.json();
    //   console.log('로그인 성공:', backendData);

      // 로그인 성공 후 원하는 페이지로 이동
    //   Alert.alert('로그인 성공', '홈 화면으로 이동합니다!');
      // navigation.navigate('Home'); // React Navigation 사용 시
    } catch (error) {
      console.error('로그인 에러:', error);
    //   Alert.alert('로그인 실패', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kakao 로그인</Text>

      {!showWebView && (
        <TouchableOpacity style={styles.button} onPress={() => setShowWebView(true)}>
          <Text style={styles.buttonText}>Kakao 로그인</Text>
        </TouchableOpacity>
      )}

      {showWebView && (
        <WebView
          source={{ uri: KAKAO_AUTH_URL }}
          onNavigationStateChange={handleNavigationStateChange}
          style={styles.webView}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FEE500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  webView: {
    flex: 1,
    width: '100%',
  },
});

export default KakaoLoginScreen;
