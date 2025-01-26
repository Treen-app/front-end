import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const ConfirmDeletionScreen = () => {
  // const [password, setPassword] = useState(''); 
  const navigation = useNavigation();

//   const handleSubmit = () => {
//     if (password === actualPassword) {
//       setErrorMessage('');
//       navigation.navigate('ConfirmDeletion'); // 다음 화면으로 이동
//     } else {
//       setErrorMessage('비밀번호가 일치하지 않습니다');
//     }
//   };

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text style={styles.title}>정말 탈퇴하시겠습니까?</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.backButton // 입력 여부에 따라 버튼 색 변경
        ]}
        // onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>돌아가기</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={[
          styles.submitButton // 입력 여부에 따라 버튼 색 변경
        ]}
        // onPress={() => navigation.navigate('CompleteExit')}
      >
        <Text style={styles.buttonText}>탈퇴하기</Text>
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
    marginTop: 30,
    textAlign: 'center'
  },
  submitButton: {
    backgroundColor: '#04AD45',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50
  },
  backButton: {
    backgroundColor: '#9B9B9B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ConfirmDeletionScreen;
