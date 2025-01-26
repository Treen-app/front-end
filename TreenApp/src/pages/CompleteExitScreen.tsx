import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const CompleteExitScreen= () => {

  return (
    <View style={styles.container}>

        <View style={styles.container}>
            <Text style={styles.title}>
            탈퇴가 완료되었습니다
            </Text>
            <Text style={styles.title}>
            <Text> 
                <Text> 
                <Text style={styles.greenText}>트린</Text> 
                </Text>
                을 이용해주셔서 감사합니다
            </Text>
            </Text>
        </View>

      <TouchableOpacity
        style={[
          styles.submitButton 
        ]}
        // onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>완료</Text>
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
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold'
  },
  greenText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#04AD45'
  },
  submitButton: {
    backgroundColor: '#04AD45',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CompleteExitScreen;
