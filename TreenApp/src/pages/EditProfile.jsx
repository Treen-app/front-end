import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Alert } from "react-native";
import UpBar from "../components/MyPage/UpBar";
import Frame4 from "../components/MyPage/Frame4";
import ProcessBtnVariant from "../components/MyPage/ProcessBtnVariant";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Config from "react-native-config";

const EditProfile = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const handleSaveProfile = async () => {
    if (!nickname && !profileImage) {
      Alert.alert("오류", "변경할 닉네임 또는 프로필 사진을 선택하세요.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("accessToken");

      let formData = new FormData();
      if (nickname) {
        formData.append("nickname", nickname);
      }
      if (profileImage) {
        let localUri = profileImage;
        let filename = localUri.split("/").pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        formData.append("profileImage", {
          uri: localUri,
          name: filename,
          type,
        });
      }

      const response = await fetch(`${Config.API_BASE_URL}/user/profile`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("성공", "프로필이 변경되었습니다.");
        navigation.goBack();
      } else {
        Alert.alert("실패", data.message || "프로필 변경에 실패했습니다.");
      }
    } catch (err) {
      Alert.alert("오류", "서버와의 연결에 문제가 발생했습니다.");
    }
  };

  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <UpBar
        upBarMarginLeft="unset"
        arrow2={require("../../img/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="프로필 변경"
        textMarginLeft={-45.5}
        upBarPosition="relative"
        upBarTop="unset"
        upBarLeft="unset"
        group187={require("../../img/Mypage/group-1871.svg")}
        showGroupIcon
      />
      <View style={[styles.frame, styles.viewFlexBox]}>
        <TouchableOpacity onPress={handleImagePick} style={styles.imageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Text style={styles.imagePlaceholder}>프로필 사진 선택</Text>
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="새로운 닉네임 입력"
          value={nickname}
          onChangeText={setNickname}
        />

        <ProcessBtnVariant
          prop="저장"
          processBtnVariant3Position="relative"
          processBtnVariant3Top="unset"
          processBtnVariant3Left="unset"
          onPress={handleSaveProfile}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    width: 337,
    height: 689,
    gap: 90,
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 46,
    gap: 25,
  },
});

export default EditProfile;
