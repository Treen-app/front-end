// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import LoginScreen from './src/pages/LoginScreen'; // 로그인 화면
import FindIdScreen from './src/pages/FindIdScreen'; // 아이디 찾기 화면
import ResetPasswordScreen from './src/pages/ResetPasswordScreen'; // 비밀번호 재설정 화면
import ProductDetailScreen from './src/pages/ProductDetailScreen'; // 상품 상세 화면
import ProductListScreen from './src/pages/ProductListScreen'; // 거래 상품 목록 화면
import CheckPhoneNumberScreen from './src/pages/CheckPhoneNumberScreen'; // 핸드폰번호 변경 화면
import DeleteAccountScreen from './src/pages/DeleteAccountScreen'; // 회원 탈퇴 화면
import ExitReasonScreen from './src/pages/ExitReasonScreen';// 탈퇴 사유 선택 페이지
import EnterPasswordScreen from './src/pages/EnterPasswordScreen'; // 회원 탈퇴시 비밀번호 입력 페이지
import ConfirmDeletionScreen from './src/pages/ConfirmDeletionScreen'; // 회원 탈퇴 확인 페이지
import CompleteExitScreen from './src/pages/CompleteExitScreen'; // 회원 탈퇴 완료 페이지
import IDCheckScreen from './src/pages/IDCheckScreen'; // 회원가입시 아이디 입력 화면
import NicknameCheckScreen from './src/pages/NicknameCheckScreen'; // 회원가입시 닉네임 입력 화면
import SignUpAgreeScreen from './src/pages/SignUpAgreeScreen'; // 회원가입시 닉네임 입력 화면
import CompleteSignupScreen from './src/pages/CompleteSignupScreen'; // 회원가입 완료 화면
import ExchangeProductDetailScreen from './src/pages/ExchangeProductDetailScreen'; // 교환 상품 상세 화면
import ProfileEditScreen from './src/pages/ProfileEditScreen'; // 프로필 수정 화면
import ChatScreen from './src/pages/ChatScreen'; // 채팅 화면
import SearchScreen from './src/pages/SearchScreen'; // 검색 화면
import EnterPhoneNumberScreen from './src/pages/EnterPhoneNumberScreen'; // 전화번호 인증 화면
import HeaderLeft from './src/components/Header/HeaderLeft'
import HeaderRight from './src/components/Header/HeaderRight'


const Stack = createStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부
  

  return (
    <NavigationContainer>
      {/* 회원가입 */}
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'SignUpAgree'}>

        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false, // 상단 헤더를 숨기기
          }}
        />

        
        {/* 회원가입 동의 화면 */}
        <Stack.Group>
          <Stack.Screen
            name="SignUpAgree"
            component={SignUpAgreeScreen}
            options={({ navigation }) => ({
              title: '회원가입', 
              headerStyle: {
                elevation: 0, // Android에서 그림자 없애기
                shadowOpacity: 0, // iOS에서 그림자 없애기
                borderBottomWidth: 0, // 모든 플랫폼에서 선 제거
              },
              headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerRight: () => <HeaderRight navigation={navigation} />,
              headerTitleAlign: 'center', 
            })}
          />

          {/* 전화번호 입력 화면 */}
          <Stack.Screen
            name="EnterPhoneNumber"
            component={EnterPhoneNumberScreen}
            options={({ navigation }) => ({
              title: '회원가입', 
              headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerTitleAlign: 'center', 
            })}
          />
          {/* 아이디 입력 화면 */}
          <Stack.Screen
            name="IDCheck"
            component={IDCheckScreen}
            options={({ navigation }) => ({
              title: '회원가입', 
              headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerTitleAlign: 'center', 
            })}
          />

          {/* 닉네임 입력 화면 */}
          <Stack.Screen
            name="NicknameCheck"
            component={NicknameCheckScreen}
            options={({ navigation }) => ({
              title: '회원가입', 
              headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerTitleAlign: 'center', 
            })}
          />

          {/* 비밀번호 입력 화면 */}
          <Stack.Screen
            name="EnterPassword"
            component={EnterPasswordScreen}
            options={({ navigation }) => ({
              title: '회원가입', 
              headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerTitleAlign: 'center', 
            })}
          />

          {/* 회원가입 완료 화면 */}
          <Stack.Screen
            name="CompleteSignup"
            component={CompleteSignupScreen}
            options={({ navigation }) => ({
              title: '회원가입', 
              headerLeft: () => <HeaderLeft navigation={navigation} />,
              headerTitleAlign: 'center', 
            })}
          />
        </Stack.Group>
      </Stack.Navigator>








      {/* <Stack.Navigator initialRouteName="EnterPhoneNumber"> */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false, // 상단 헤더를 숨기기
          }}
        />
        <Stack.Screen 
          name="FindId" 
          component={FindIdScreen} 
          options={({ navigation }) => ({
            title: '아이디 찾기', 
            headerStyle: {
              elevation: 0, // Android에서 그림자 없애기
              shadowOpacity: 0, // iOS에서 그림자 없애기
              borderBottomWidth: 0, // 모든 플랫폼에서 선 제거
            },
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center', // 타이틀 가운데 정렬
          })}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={({ navigation }) => ({
            title: '비밀번호 재설정', // 타이틀 설정
            headerStyle: {
              elevation: 0, // Android에서 그림자 없애기
              shadowOpacity: 0, // iOS에서 그림자 없애기
              borderBottomWidth: 0, // 모든 플랫폼에서 선 제거
            },
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center', // 타이틀 가운데 정렬
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={({ navigation }) => ({
            title: '상품 정보', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="ExchangeProductDetail"
          component={ExchangeProductDetailScreen}
          options={({ navigation }) => ({
            title: '상품 정보', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="Treen"
          component={ProductListScreen}
          options={({ navigation }) => ({
            headerTitleAlign: 'left', // 화면 이름을 왼쪽으로 정렬
            headerTitleStyle: {
              marginLeft: 16, 
              color: '#04AD45',
              fontSize: 25,
              fontWeight: 'bold',
            },
            headerStyle: {
              elevation: 0, // Android에서 그림자 없애기
              shadowOpacity: 0, // iOS에서 그림자 없애기
              borderBottomWidth: 0, // 모든 플랫폼에서 선 제거
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                {/* Search Icon */}
                <TouchableOpacity 
                  onPress={() => {
                    console.log('Search button pressed');
                    // 검색 화면으로 이동
                    navigation.navigate('SearchScreen'); // 원하는 스크린으로 변경
                  }}
                >
                  <AntDesign name="search1" size={22} style={{ marginRight: 16 }} />
                </TouchableOpacity>

                {/* Bell Icon */}
                <TouchableOpacity 
                  onPress={() => {
                    console.log('Bell button pressed');
                    // 알림 화면으로 이동
                    navigation.navigate('NotificationScreen'); // 원하는 스크린으로 변경
                  }}
                >
                  <SimpleLineIcons name="bell" size={22} />
                </TouchableOpacity>
              </View>
            ),
          })}        
        />
        <Stack.Screen
          name="CheckPhoneNumber"
          component={CheckPhoneNumberScreen}
          options={({ navigation }) => ({
            title: '회원정보 수정', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccountScreen}
          options={({ navigation }) => ({
            title: '회원 탈퇴', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="ExitReason"
          component={ExitReasonScreen}
          options={({ navigation }) => ({
            title: '회원 탈퇴', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="EnterPassword"
          component={EnterPasswordScreen}
          options={({ navigation }) => ({
            title: '회원 탈퇴', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="ConfirmDeletion"
          component={ConfirmDeletionScreen}
          options={({ navigation }) => ({
            title: '회원 탈퇴', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="CompleteExit"
          component={CompleteExitScreen}
        />
        <Stack.Screen
          name="IDCheck"
          component={IDCheckScreen}
          options={({ navigation }) => ({
            title: '회원 탈퇴', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="EnterPhoneNumber"
          component={EnterPhoneNumberScreen}
          options={({ navigation }) => ({
            title: '회원가입', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="NicknameCheck"
          component={NicknameCheckScreen}
          options={({ navigation }) => ({
            title: '회원가입', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="SignUpAgree"
          component={SignUpAgreeScreen}
          options={({ navigation }) => ({
            title: '회원가입', 
            headerStyle: {
              elevation: 0, // Android에서 그림자 없애기
              shadowOpacity: 0, // iOS에서 그림자 없애기
              borderBottomWidth: 0, // 모든 플랫폼에서 선 제거
            },
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center', 
          })}
        />
        
         <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={({ navigation }) => ({
            title: '프로필 변경', 
            headerLeft: () => <HeaderLeft navigation={navigation} />,
            headerTitleAlign: 'center', 
          })}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          // options={({ navigation }) => ({
            // title: '프로필 변경', 
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
            //     <Icon name="arrow-back" size={24} color="black" />
            //   </TouchableOpacity>
            // ),
            // headerTitleAlign: 'center', 
          // })}
          options={{
            headerShown: false, // 상단 헤더를 숨기기
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: {
              elevation: 0, // Android에서 그림자 없애기
              shadowOpacity: 0, // iOS에서 그림자 없애기
              borderBottomWidth: 0, // 모든 플랫폼에서 선 제거
            },
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10,}}>
            //     <Icon name="arrow-back" size={24} color="black"/>
            //   </TouchableOpacity>
            // ),
            // headerRight: () => (
            //   <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
            //     <Icon name="search" size={24} color="black" />
            //   </TouchableOpacity>
            // ),
          })}
        />
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
