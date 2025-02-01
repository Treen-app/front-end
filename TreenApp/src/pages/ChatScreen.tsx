import React, { useState } from "react";
import { View, 
  Text, 
  Image, 
  TouchableOpacity, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback, 
  ScrollView,
  Modal,
} from "react-native";
import styles from "../styles/ChatScreenStyles"; // 스타일 파일 임포트
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SatisfactionModal from "./SatisfactionModal";

const ProductCard = () => (
  <View style={styles.productCard}>
    <Image source={require("../img/adidas.png")} style={styles.productImage} />
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
);

const MessageList = () => (
  <View style={styles.messageContainer}>
    <View style={styles.sentMessage}>
      <Text style={[styles.chatText, { color: "white" }]}>
        안녕하세요 남친이랑은 왜 헤어지셨나요?
      </Text>
      <Text style={styles.time}>오후 3:39</Text>
    </View>
    <View style={styles.receivedMessage}>
      <Text style={styles.chatText}>
        얼마 못 신은 커플신발인데 남친이 군대가서 팔아요. 남자 290사이즈입니다.
      </Text>
    </View>
    <View style={styles.receivedMessage}>
      <Text style={styles.chatText}>물어보지 마세요.</Text>
    </View>
  </View>
);

// 타입 선언
interface InputBarProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputBar: React.FC<InputBarProps> = ({ message, setMessage, isFocused, setIsFocused }) => (
  <View style={styles.footer}>
    <AntDesign style={styles.add} name="plus" size={20} />
    <TextInput
      style={styles.input}
      placeholder="send your message..."
      value={message}
      onChangeText={setMessage}
      placeholderTextColor="#DBDBDB"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
    {isFocused && (
      <TouchableOpacity
        disabled={!message.trim()}
        onPress={() => {
          console.log("Message sent:", message);
          setMessage("");
        }}
      >
        <Ionicons
          name="send"
          size={20}
          style={[
            styles.sendButton,
            { color: message.trim() ? "#04AD45" : "#DBDBDB" },
          ]}
        />
      </TouchableOpacity>
    )}
  </View>
);

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false); 
  const [endModalVisible, setEndModalVisible] = useState(false);
  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [satisfactionModalVisible, setSatisfactionModalVisible] = useState(false);

  const dismissKeyboard = () => Keyboard.dismiss();

  const openFirstModal = () => setFirstModalVisible(true);
  const closeFirstModal = () => setFirstModalVisible(false);

  const openEndModal = () => setEndModalVisible(true);
  const closeEndModal = () => setEndModalVisible(false);

  const closeSatisfactionModal = () => {
    setSatisfactionModalVisible(false);
    setEndModalVisible(true); // 만족도 모달 닫고 트린 지급 완료 모달 열기
  };
  
  return (
    // <TouchableWithoutFeedback onPress={dismissKeyboard} >
      <View style={{ flex: 1, backgroundColor:"white"}}>

        {/* 버튼으로 첫 번째 모달 열기 */}
        {/* <Button title="거래 완료"  onPress={openFirstModal}  /> */}

        {/* 거래 완료 확인 모달 */}
        <Modal visible={firstModalVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.confirmTitle}>거래를 완료할까요?</Text>
              <Text style={styles.infoMessage}>
                *물건 수령 후 거래 완료를 권장해요.
              </Text>
              <Text style={styles.infoMessage}>
                *거래 완료시 트린 지급
              </Text>
              <View style={styles.buttonContainer}>
                {/* 취소 버튼 */}
                <TouchableOpacity
                  style={[styles.cancelButton]} // 스타일 적용
                  onPress={closeFirstModal}
                >
                  <Text style={[styles.cancelText]}>취소</Text> {/* 텍스트 스타일 적용 */}
                </TouchableOpacity>

                {/* 완료 버튼 */}
                <TouchableOpacity
                  style={styles.confirmButton} // 스타일 적용
                  onPress={() => {
                    closeFirstModal();
                    setSatisfactionModalVisible(true);
                  }}
                >
                  <Text style={styles.buttonText}>완료</Text> {/* 텍스트 스타일 적용 */}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* 만족도 모달 */}
        <SatisfactionModal
          visible={satisfactionModalVisible}
          onClose={closeSatisfactionModal} // 만족도 모달 닫기
        />

        {/* 트린 지급 완료 모달 */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={endModalVisible}
          onRequestClose={closeEndModal} // Android에서 Back 버튼 처리
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>거래완료! 100트린 지급</Text>
              <Text style={styles.modalMessage}>
                거래 축하 보너스 트린을 지급받았어요.
              </Text>
              <Text style={[styles.modalMessage, {fontSize: 25}]}>
                🎉
              </Text>
              <TouchableOpacity onPress={closeEndModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
          // keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <ProductCard />
            <MessageList />
          </View>
        </ScrollView>

        {/* 예약하기 버튼 */}
        <TouchableOpacity style={styles.reserveButton} onPress={() => setFirstModalVisible(true)}>
          <Text style={styles.reserveButtonText}>예약하기</Text>
        </TouchableOpacity>
        
        {/* InputBar */}
        <InputBar
            message={message}
            setMessage={setMessage}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
        />
      </View>

    
  );
};

export default ChatScreen;
    {/* </TouchableWithoutFeedback> */}