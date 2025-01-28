import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";
import Profileimg from "../../img/Mypage/profile-img.svg";

const ProfileImg = ({ style }) => {
  return (
    <Profileimg style={[styles.profileImgIcon, style]} width={70} height={70} />
  );
};

const styles = StyleSheet.create({
  profileImgIcon: {},
});

export default ProfileImg;
