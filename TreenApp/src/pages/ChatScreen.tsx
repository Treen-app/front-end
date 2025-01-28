import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import styles from "../styles/ChatScreenStyles"; // 스타일 파일 임포트
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false); 

  // 화면 전체를 감싸는 터치 영역에서 키보드 닫기
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1, backgroundColor:"white"}}>
          {/* Header */}
          <View style={styles.header}>
              <TouchableOpacity>
                <Icon name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.profileImage}
              />
              <Text style={styles.username}>User2</Text>
            </View>
        {/* ScrollView로 감쌀 부분 */}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            

            {/* Product Card */}
            <View style={styles.productCard}>
              <Image
                source={require('../img/adidas.png')} style={styles.productImage}
              />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>얼마 못 신은 신발</Text>
                <Text style={styles.productPrice}>30,000TR</Text>
                <View style={styles.productTagContainer}>
                  <Text style={styles.productTag}>XL</Text>
                  <Text style={styles.productTag}>A급</Text>
                  <Text style={styles.productTag}>직거래</Text>
                  <Text style={styles.productTag}>신발</Text>
                </View>
              </View>
            </View>

            {/* Chat Messages */}
            <View style={styles.messageContainer}>
              {/* Sent Message */}
              <View style={styles.sentMessage}>
                <Text style={[styles.chatText, {color: 'white'}]}>안녕하세요 남친이랑은 왜 헤어지셨나요?</Text>
                <Text style={styles.time}>오후 3:39</Text>
              </View>
             
              {/* Received Message */}
              <View style={styles.receivedMessage}>
                <Text style={styles.chatText}>
                  얼마 못 신은 커플신발인데 남친이 군대가서 팔아요. 남자 290사이즈입니다.
                </Text>
              </View>
              <View style={styles.receivedMessage}>
                <Text style={styles.chatText}>
                  물어보지 마세요.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* 예약하기 버튼 */}
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>예약하기</Text>
        </TouchableOpacity>

        {/* 채팅 UI - 메시지 입력창 */}
        <View style={styles.footerContainer}>
          <View style={styles.footer}>
            <AntDesign style={styles.add} name="plus" size={20}></AntDesign>
            <TextInput
              style={styles.input}
              placeholder="send your message..."
              value={message}
              onChangeText={setMessage}
              placeholderTextColor="#DBDBDB"
              onFocus={() => setIsFocused(true)} // 입력창에 포커스가 갔을 때
              onBlur={() => setIsFocused(false)}  // 입력창에서 포커스가 벗어났을 때
            />
            <TouchableOpacity
              disabled={!message.trim()} // 메시지가 없으면 버튼 비활성화
              onPress={() => {
                console.log("Message sent:", message);
                setMessage(""); // 메시지 전송 후 초기화
              }}
            >
              {/* 입력창이 포커스 되었을 때만 send 버튼 표시 */}
              {isFocused && (
                <TouchableOpacity
                  disabled={!message.trim()} // 메시지가 없으면 버튼 비활성화
                  onPress={() => {
                    console.log("Message sent:", message);
                    setMessage(""); // 메시지 전송 후 초기화
                  }}
                >
                  <Ionicons
                    disabled={!message.trim()} 
                    name="send" 
                    size={20} 
                    style={[
                      styles.sendButton,
                      { color: message.trim() ? "#04AD45" : "#DBDBDB" }, // 메시지 상태에 따른 색상 변경
                    ]}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatScreen;
