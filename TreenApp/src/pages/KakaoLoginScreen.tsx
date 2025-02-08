// import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import {
//   login,
//   logout,
//   getProfile as getKakaoProfile,
//   shippingAddresses as getKakaoShippingAddresses,
//   unlink,
// } from "@react-native-seoul/kakao-login";

// const KakaoLoginScreen = () => {
//   const [result, setResult] = useState<string>("");

//   const signInWithKakao = async (): Promise<void> => {
//     try {
//       const token = await login();
//       setResult(JSON.stringify(token));
//     } catch (err) {
//       console.error("login err", err);
//     }
//   };

//   const signOutWithKakao = async (): Promise<void> => {
//     try {
//       const message = await logout();

//       setResult(message);
//     } catch (err) {
//       console.error("signOut error", err);
//     }
//   };

//   const getProfile = async (): Promise<void> => {
//     try {
//       const profile = await getKakaoProfile();

//       setResult(JSON.stringify(profile));
//     } catch (err) {
//       console.error("signOut error", err);
//     }
//   };

//   const getShippingAddresses = async (): Promise<void> => {
//     try {
//       const shippingAddresses = await getKakaoShippingAddresses();

//       setResult(JSON.stringify(shippingAddresses));
//     } catch (err) {
//       console.error("signOut error", err);
//     }
//   };

//   const unlinkKakao = async (): Promise<void> => {
//     try {
//       const message = await unlink();

//       setResult(message);
//     } catch (err) {
//       console.error("signOut error", err);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.resultContainer}>
//         <ScrollView>
//           <Text>{result}</Text>
//           <View style={{ height: 100 }} />
//         </ScrollView>
//       </View>
//       <Pressable
//         style={styles.button}
//         onPress={() => {
//           signInWithKakao();
//         }}
//       >
//         <Text style={styles.text}>카카오 로그인</Text>
//       </Pressable>
//       <Pressable style={styles.button} onPress={() => getProfile()}>
//         <Text style={styles.text}>프로필 조회</Text>
//       </Pressable>
//       <Pressable style={styles.button} onPress={() => getShippingAddresses()}>
//         <Text style={styles.text}>배송주소록 조회</Text>
//       </Pressable>
//       <Pressable style={styles.button} onPress={() => unlinkKakao()}>
//         <Text style={styles.text}>링크 해제</Text>
//       </Pressable>
//       <Pressable style={styles.button} onPress={() => signOutWithKakao()}>
//         <Text style={styles.text}>카카오 로그아웃</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default KakaoLoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     height: "100%",
//     justifyContent: "flex-end",
//     alignItems: "center",
//     paddingBottom: 100,
//   },
//   resultContainer: {
//     flexDirection: "column",
//     width: "100%",
//     padding: 24,
//   },
//   button: {
//     backgroundColor: "#FEE500",
//     borderRadius: 40,
//     borderWidth: 1,
//     width: 250,
//     height: 40,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginTop: 10,
//   },
//   text: {
//     textAlign: "center",
//   },
// });

import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';
import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Linking } from 'react-native';
import queryString from 'query-string';
import Config from 'react-native-config';

const KakaoLoginScreen = () => {
  const googleLoginUrl =
    'https://accounts.google.com/o/oauth2/v2/auth?client_id=' +
    Config.GOOGLE_CLIENT_ID +
    '&redirect_uri=' +
    Config.GOOGLE_REDIRECT_URI +
    '&response_type=code' +
    '&scope=email profile';

  const naverLoginUrl =
    'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
    Config.NAVER_CLIENT_ID +
    '&state=NAVER_STATE_STRING&redirect_uri=' +
    Config.NAVER_REDIRECT_URI;

  const handleKakaoLogin = async () => {
    try {
      const token: KakaoOAuthToken = await login();
      console.log('handleKakaoLogin', 'success', token);
    } catch (error) {
      console.error('Kakao login error:', error);
      Alert.alert('로그인 실패', '카카오 로그인 중 오류가 발생했습니다.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await Linking.openURL(googleLoginUrl);
    } catch (error) {
      console.error('Google login error:', error);
      Alert.alert('로그인 실패', '구글 로그인 중 오류가 발생했습니다.');
    }
  };

  // 네이버 로그인 처리 함수
  const handleNaverLogin = async () => {
    try {
      console.log("네이버 로그인 URL:", naverLoginUrl);
      await Linking.openURL(naverLoginUrl);
    } catch (error) {
      console.error('Naver login error:', error);
      Alert.alert('로그인 실패', '네이버 로그인 중 오류가 발생했습니다.');
    }
  };


  React.useEffect(() => {
    const handleOpenURL = ({ url }: { url?: string }) => {
      if (url) {
        console.log('Received URL:', url); 
        const parsed = queryString.parse(url.split('?')[1]); // 쿼리 문자열 파싱
        const authorizationCode = parsed.code as string; // 'code' 키에서 값 가져오기
        if (authorizationCode) {
          console.log('인가 코드:', authorizationCode);
        } else {
          console.warn('인가 코드가 없습니다.');
        }
      }
    };

    const subscription = Linking.addEventListener('url', handleOpenURL);

    return () => {
      subscription.remove();
    };
  }, []);


  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="카카오 로그인" onPress={handleKakaoLogin} />

      <TouchableOpacity onPress={handleGoogleLogin}>
        <Image source={require('../img/google.png')} style={styles.googleIcon} />
      </TouchableOpacity>

      <Button title="네이버 로그인" onPress={handleNaverLogin} />
    </View>
  );
};
const styles = StyleSheet.create({
  googleIcon: {
    marginHorizontal: 10,
    width: 37,
    height: 37,
    marginTop: 2
  },
});
export default KakaoLoginScreen;