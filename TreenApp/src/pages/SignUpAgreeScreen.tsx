import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import type { StackNavigationProp } from '@react-navigation/stack';
import { signUpStackParamList } from '../types/signUpNavigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

type SignUpAgreeScreenNavigationProp = StackNavigationProp<signUpStackParamList, 'SignUpAgree'>;

interface Props {
  navigation: SignUpAgreeScreenNavigationProp;
}

const SignUpAgreeScreen: React.FC<Props> = ({ navigation }) => {
  const [checkedReasons, setCheckedReasons] = useState({
    all: false,
    privacy: false,
    features: false,
    trust: false,
    marketing: false,
  });

  const handleButtonPress = (reason: keyof typeof checkedReasons) => {
    const updatedReasons = { ...checkedReasons };

    if (reason === 'all') {
      const newState = !checkedReasons.all;
      (Object.keys(updatedReasons) as (keyof typeof updatedReasons)[]).forEach((key) => {
        updatedReasons[key] = newState;
      });
    } else {
      updatedReasons[reason] = !checkedReasons[reason];

      const allSelected = (Object.keys(updatedReasons) as (keyof typeof updatedReasons)[]).every(
        (key) => key === 'all' || updatedReasons[key]
      );
      updatedReasons.all = allSelected;
    }

    setCheckedReasons(updatedReasons);
  };

  const isAllChecked = 
    checkedReasons.privacy &&
    checkedReasons.features &&
    checkedReasons.trust;

  const handleAgreeSubmit = async () => {
    if (!isAllChecked) {
      Alert.alert('약관 동의 필요', '필수 약관에 동의해주세요.');
      return;
    }

    try {
      const response = await fetch(`${Config.API_BASE_URL}/auth/agree`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          privacy: checkedReasons.privacy,
          features: checkedReasons.features,
          trust: checkedReasons.trust,
          marketing: checkedReasons.marketing,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('userAgreement', JSON.stringify(checkedReasons));
        Alert.alert('약관 동의 완료', '회원가입을 계속 진행해주세요.');
        navigation.navigate('EnterPhoneNumber');
      } else {
        Alert.alert('동의 실패', data.message || '서버와의 문제로 동의가 완료되지 않았습니다.');
      }
    } catch (error) {
      Alert.alert('오류', '서버와 연결할 수 없습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>친환경 중고 의류 플랫폼,{"\n"}</Text>
        <Text>
          <Text style={styles.greenText}>트린</Text>
          <Text style={styles.title}>에 오신 것을 환영합니다!</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => handleButtonPress('all')}
      >
        <AntIcon
          name="check"
          size={20}
          style={[
            styles.antIcon,
            checkedReasons.all && { color: '#04AD45' },
          ]}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.agreeAll}>모두 동의합니다.</Text>
          <Text style={styles.greyText}>
            마케팅 정보 수신동의(이메일,SNS/SMS) (선택) 동의를 포함합니다.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => handleButtonPress('privacy')}
      >
        <AntIcon
          name="check"
          size={20}
          style={[
            styles.antIcon,
            checkedReasons.privacy && { color: '#04AD45' },
          ]}
        />
        <Text style={styles.essential}>(필수) </Text>
        <Text style={styles.checkButtonText}>개인회원 약관에 동의</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => handleButtonPress('features')}
      >
        <AntIcon
          name="check"
          size={20}
          style={[
            styles.antIcon,
            checkedReasons.features && { color: '#04AD45' },
          ]}
        />
        <Text style={styles.essential}>(필수) </Text>
        <Text style={styles.checkButtonText}>
          개인정보 수집 및 이용에 동의
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => handleButtonPress('trust')}
      >
        <AntIcon
          name="check"
          size={20}
          style={[
            styles.antIcon,
            checkedReasons.trust && { color: '#04AD45' },
          ]}
        />
        <Text style={styles.essential}>(필수) </Text>
        <Text style={styles.checkButtonText}>
          위치기반서비스 이용약관에 동의
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.checkButton}
        onPress={() => handleButtonPress('marketing')}
      >
        <AntIcon
          name="check"
          size={20}
          style={[
            styles.antIcon,
            checkedReasons.marketing && { color: '#04AD45' },
          ]}
        />
        <Text style={[styles.checkButtonText, { flex: 1 }]}>
          (선택) 마케팅 정보 수신 동의
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.submitButton,
          isAllChecked ? styles.submitButtonActive : styles.submitButtonInactive,
        ]}
        disabled={!isAllChecked}
        onPress={handleAgreeSubmit}
      >
        <Text style={styles.submitButtonText}>
          {isAllChecked ? '완료' : '필수 약관에 동의해주세요'}
        </Text>
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
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 55,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    height: 30
  },
  greenText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 30,
    color: '#04AD45',
  },
  checkButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    width: '95%',
  },
  checkButtonText: {
    color: 'black',
    fontSize: 14,
  },
  agreeAll: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  greyText: {
    fontSize: 12,
    color: '#646464',
    marginTop: 5,
  },
  essential: {
    color: '#FF4646',
    fontSize: 14,
  },
  antIcon: {
    color: '#C8C8C8',
    marginRight: 10,
  },
  submitButtonActive: {
    backgroundColor: '#04AD45',
  },
  submitButtonInactive: {
    backgroundColor: '#8C8C8C',
  },
  submitButton: {
    position: 'absolute',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    width: '90%',
    bottom: 60,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpAgreeScreen;
