import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const CompleteSignupScreen= () => {

  return (
    <View style={styles.container}>

        <View style={styles.container}>
            <Text style={styles.titleIcon}>
            🎉
            </Text>
            <Text style={styles.title}>
            회원가입 완료
            </Text>
            <Text style={styles.subtitle}>
            <Text> 
                <Text> 
                <Text style={styles.greenText}>트린</Text> 
                </Text>
                에 오신 것을 환영합니다!
            </Text>
            </Text>
        </View>

      <TouchableOpacity
        style={[
          styles.submitButton 
        ]}
        // onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>로그인 하러가기</Text>
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
  titleIcon: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 40,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 10,
  },
  greenText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    color: '#04AD45'
  },
  submitButton: {
    backgroundColor: '#04AD45',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 70
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default CompleteSignupScreen;
