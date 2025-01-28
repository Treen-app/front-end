import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const DeleteAccountScreen = () => {
    // 상태 선언: 버튼이 눌렸을 때 색상 변경을 위한 상태
    const [isChecked, setIsChecked] = useState(false);

  // 버튼 클릭 핸들러
  const handleButtonPress = () => {
    setIsChecked(!isChecked); // 상태를 반전시켜 색상을 바꿈
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>서비스 탈퇴 안내사항</Text>

      <View style={styles.noticeContainer}>
        <Text style={styles.noticeText}>• 탈퇴하시면 진짜 할거니? 하지마 우릴 버리지마</Text>
        <Text style={styles.noticeText}>• [설정]-[회원정보수정]에서 가능하단다. 이래도 진짜 할거니?</Text>
        <Text style={styles.noticeText}>• 어쩌구 저쩌구 이래도 진짜할거니?</Text>
        <Text style={styles.noticeText}>• 진짜로할꺼야? 혹시 이용과정에서 불편한 점이 있다면, [설정]-[문의하기]에 문의주면 우리가 고칠게 정말 진심이야 우리가 바꿀게 날 버리지마</Text>
      </View>
      <TouchableOpacity style={styles.checkButton} onPress={handleButtonPress}>
        <AntIcon name="check" size={20} style={[styles.antIcon, isChecked && { color: '#04AD45' }]}  />
        <Text style={[styles.checkButtonText, isChecked && { color: '#04AD45' }]}>전부 삭제하고 탈퇴하겠습니다</Text>
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
  noticeContainer: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  noticeText: {
    color: '#333333',
    marginTop: 8,
    marginBottom: 8,
    fontSize: 12
  },
  checkButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  checkButtonText: {
    color: 'black',
    fontSize: 14,
  },
  antIcon: {
    color: '#C8C8C8',
    marginRight: 10
  }
});

export default DeleteAccountScreen;
