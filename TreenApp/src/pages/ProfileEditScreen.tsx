import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Slider from '@react-native-community/slider';
import moment from 'moment';

export default function ProfileEditScreen() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [username, setUsername] = useState('');
    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [nickname, setNickname] = useState('');
    const [dob, setDob] = useState('');
    const [height, setHeight] = useState('');
    const [footSize, setFootSize] = useState<number>(210);
    const [clothesSize, setClothesSize] = useState<string>("XS");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [error, setError] = useState('');
    const [inputWarning, setInputWarning] = useState(false);
    const [buttonWarning, setButtonWarning] = useState(false);
    const [text, onChangeText] = useState("");

    const clothesSizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

    const selectImage = () => {
        ImagePicker.launchImageLibrary(
          { mediaType: "photo", includeBase64: false },
          (response: ImagePicker.ImagePickerResponse) => {
            if (response.assets && response.assets[0].uri) {
              setProfileImage(response.assets[0].uri);
            }
          }
        );
    };

    const handleGenderSelect = (gender: string) => {
      setSelectedGender(gender);
    };

    const handleHeightChange = (input: string) => {
      const value = parseInt(input, 10);
      if (!isNaN(value) && value >= 100 && value <= 200) {
        setHeight(value.toString());
        setError('');  // 유효한 값일 경우 오류 메시지 지우기
        setInputWarning(false);  // 키가 올바를 때 경고 메시지 초기화
      } else {
        setHeight(input);
        setError('키는 100cm에서 200cm 사이여야 합니다.');  // 범위 밖일 경우 오류 메시지 설정
        setInputWarning(true);  // 범위 밖일 때 경고 메시지 표시
      }
    };

    const handleSubmit = () => {
      let isValid = true;
    
      // 필수 항목 검사
      if (!nickname || !selectedGender || !dob || !username) {
        setButtonWarning(true);
        isValid = false;
      } else {
        setButtonWarning(false);  // 필수 항목이 모두 입력되면 경고 메시지 초기화
      }
    
      // 키 범위 검사
      if (height && (parseInt(height, 10) < 100 || parseInt(height, 10) > 200)) {
        setInputWarning(true);  // 범위 밖일 때 경고 메시지 표시
        isValid = false;
      } else {
        setInputWarning(false);  // 범위 내일 때 경고 메시지 초기화
      }
    
      if (isValid) {
        console.log('폼이 제출되었습니다.');
      }
    };
    

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
      hideDatePicker();
      onChangeText(moment(date).format('YYYY / MM / DD'));
      setDob(moment(date).format('YYYY / MM / DD'));
    };
    
    Date.prototype.format = function(f: Date) {
      if (!this.valueOf()) return " ";
   
      var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
      var d = this;
       
      return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
          switch ($1) {
              case "yyyy": return d.getFullYear();
              case "yy": return (d.getFullYear() % 1000);
              case "MM": return (d.getMonth() + 1);
              case "dd": return d.getDate();
              default: return $1;
          }
      });
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={selectImage} style={styles.imageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>변경</Text>
        )}
      </TouchableOpacity>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>닉네임</Text>
        <TextInput style={styles.nicknameInput}
          value={nickname} 
          onChangeText={setNickname} 
        />
      </View>
      
      
      <View style={styles.labelContainer}>
        <Text style={styles.label}>성별</Text>
        {["남", "여", "미정"].map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[
              styles.genderButton,
              selectedGender === gender && styles.selectedGenderButton,
            ]}
            onPress={() => handleGenderSelect(gender)}
          >
            <Text
              style={[
                styles.genderText,
                selectedGender === gender && styles.selectedGenderText,
              ]}
            >
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>생년월일</Text>
        <TextInput style={styles.birthInput} 
          onPress={showDatePicker}
          value={text}
          caretHidden={true}/>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.label}>아이디</Text>
        <TextInput style={styles.idInput} 
          value={username} 
          onChangeText={setUsername} 
        />
        <Text>@  </Text>
        <TextInput style={styles.input} placeholder="" />
      </View>
      

      <View style={styles.labelContainer}>
        <Text style={styles.label}>키</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          keyboardType="numeric"
          value={height}
          onChangeText={handleHeightChange} 
        />
        <Text >cm</Text>
      </View>
      {inputWarning && (
          <Text style={styles.errorText}>키는 100cm에서 200cm 사이여야 합니다.</Text>
      )}
      
      <View style={styles.labelContainer}>
        <Text style={styles.label}>몸무게</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="numeric" />
        <Text >kg</Text>
      </View>
      
      {/* 발 사이즈 슬라이더 */}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>발 사이즈</Text>
        <View style={styles.sliderWrapper}>
          <Text style={styles.sliderLabel}>210</Text>
          <Slider
            style={styles.slider}
            minimumValue={210}
            maximumValue={310}
            step={5}
            value={footSize}
            onValueChange={setFootSize}
            minimumTrackTintColor="#04AD45"
            maximumTrackTintColor="#E0E0E0"
            thumbTintColor="#04AD45"
            // thumbImage={require('../img/thumbImage.png')}
          />
          <Text style={styles.sliderLabel}>310</Text>
        </View>
      </View>
      <Text style={styles.size}>
          {footSize} cm
      </Text>

      {/* 옷 사이즈 슬라이더 */}
      <View style={styles.labelContainer}>
        <Text style={styles.label}>옷 사이즈</Text>
        <View style={styles.sliderWrapper}>
          <Text style={styles.sliderLabel}>XS</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={clothesSizes.length - 1}
            step={1}
            value={clothesSize}
            onValueChange={setClothesSize}
            minimumTrackTintColor="#04AD45"
            maximumTrackTintColor="#E0E0E0"
            thumbTintColor="#04AD45"
          />
          <Text style={styles.sliderLabel}>4XL</Text>
        </View>
      </View>
      <Text style={styles.size}>
          {clothesSizes[clothesSize]}
      </Text>
      
      {buttonWarning && (
        <Text style={styles.errorText}>필수 항목을 모두 입력하세요.</Text>
      )}
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>저장</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  imageContainer: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center", // 텍스트를 가운데 정렬
    marginBottom: 5,
    width: 320,
    paddingRight: 50
  },
  label: {
    marginRight: 25, // 입력 필드와 텍스트 사이의 간격
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    width: 55,
    bottom: 5,
    marginLeft: 10
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 80,
    marginRight: 10
  },
  idInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 140,
    marginRight: 10
  },
  nicknameInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 200,
    marginRight: 10
  },
  birthInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: 110,
    marginRight: 10,
    textAlign: 'center',
  },
  genderButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginRight: 5,
    marginBottom: 10,
  },
  selectedGenderButton: {
    backgroundColor: "#04AD45",
  },
  genderText: {
    color: "#333",
    textAlign: 'center'
  },
  selectedGenderText: {
    color: "#FFFFFF",
    fontWeight: 'bold'
  },
  inlineText: {
    alignSelf: "center", // 텍스트가 버튼의 중간에 위치하도록
    marginHorizontal: 5,
    fontSize: 14,
    marginRight: 10,
    bottom: 5
  },
  sliderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 5
  },
  slider: {
    width: "70%",
    height: 20,
    marginBottom: 10,
    top: 3,
    
  },
  sliderLabel: {
    fontSize: 14,
    color: "#666",
    width: 30
  },
  sliderValue: {
    position: "absolute",
    top: 35,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  size: {
    left: 90,
    bottom: 15,
    // fontWeight: 'bold'
  },
  saveButton: {
    backgroundColor: "#04AD45",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: 'red',
    fontSize: 10,
    left: 90,
    bottom: 10,
    // marginTop: 4,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    color: "#333",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
    width: 65,
    marginRight: 10,
  },
  inputAndroid: {
    fontSize: 14,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    color: "#333",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 10,
    width: 65
  },
};

