import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ExitReasonScreen = () => {
  // 각 버튼의 클릭 상태를 관리하는 상태 배열
  const [checkedReason, setCheckedReason] = useState<string | null>(null);
  const [otherReason, setOtherReason] = useState<string>(''); // 기타의견 입력값 관리

  // 버튼 클릭 핸들러
  const handleButtonPress = (reason: string) => {
    // 이미 클릭된 버튼이면 색상 반전, 아니면 해당 버튼만 선택
    setCheckedReason(checkedReason === reason ? null : reason);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>서비스 탈퇴 사유</Text>

      <TouchableOpacity 
        style={styles.checkButton} 
        onPress={() => handleButtonPress('privacy')}>
        <AntIcon 
          name="check" 
          size={20} 
          style={[styles.antIcon, checkedReason === 'privacy' && { color: '#04AD45' }]}  
        />
        <Text style={[styles.checkButtonText, checkedReason === 'privacy' && { color: '#04AD45' }]}>
          개인정보 유출이 우려돼요
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.checkButton} 
        onPress={() => handleButtonPress('features')}>
        <AntIcon 
          name="check" 
          size={20} 
          style={[styles.antIcon, checkedReason === 'features' && { color: '#04AD45' }]}  
        />
        <Text style={[styles.checkButtonText, checkedReason === 'features' && { color: '#04AD45' }]}>
          기능에 불만이 있어요
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.checkButton} 
        onPress={() => handleButtonPress('trust')}>
        <AntIcon 
          name="check" 
          size={20} 
          style={[styles.antIcon, checkedReason === 'trust' && { color: '#04AD45' }]}  
        />
        <Text style={[styles.checkButtonText, checkedReason === 'trust' && { color: '#04AD45' }]}>
          신뢰도가 없어요
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.checkButton} 
        onPress={() => handleButtonPress('difficulty')}>
        <AntIcon 
          name="check" 
          size={20} 
          style={[styles.antIcon, checkedReason === 'difficulty' && { color: '#04AD45' }]}  
        />
        <Text style={[styles.checkButtonText, checkedReason === 'difficulty' && { color: '#04AD45' }]}>
          어떻게 이용해야 하는지 모르겠어요
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.checkButton} 
        onPress={() => handleButtonPress('other')}>
        <AntIcon 
          name="check" 
          size={20} 
          style={[styles.antIcon, checkedReason === 'other' && { color: '#04AD45' }]}  
        />
        <Text style={[styles.checkButtonText, checkedReason === 'other' && { color: '#04AD45' }]}>
          기타의견: 더 자세히 말씀해주실 수 있으신가요?
        </Text>
      </TouchableOpacity>

        {checkedReason === 'other' && (
            <TextInput
            style={styles.textInput}
            placeholder="기타의견을 입력해주세요."
            value={otherReason}
            onChangeText={setOtherReason}
            />
        )}
      

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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  checkButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  checkButtonText: {
    color: 'black',
    fontSize: 14,
  },
  antIcon: {
    color: '#C8C8C8',
    marginRight: 10
  },
  textInput: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,  // 바닥에만 경계선 추가
    borderBottomColor: '#C8C8C8',  // 경계선 색상
    fontSize: 14,
    color: '#333',
    width: '100%', // TextInput이 버튼의 너비를 맞추도록 설정
  },
  submitButton: {
    position: 'absolute',
    backgroundColor: '#04AD45',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    width: '100%',
    bottom: 60,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExitReasonScreen;
