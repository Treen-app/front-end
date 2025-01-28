import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Profileimg1 from "../../img/Mypage/profile-img1.svg";

const FrameComponent2 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.instanceChild, styles.instancePosition]} />
      <View style={[styles.rectangleGroup, styles.instanceItemLayout]}>
        <View style={[styles.instanceItem, styles.instanceItemLayout]} />
        <Text style={[styles.text, styles.textPosition]}>팔로잉</Text>
      </View>
      <Text style={[styles.name, styles.textPosition]}>다희다희</Text>
      <Profileimg1 style={styles.profileImgIcon} width={70} height={70} />
    </View>
  );
};

const styles = StyleSheet.create({
  instancePosition: {
    left: "50%",
    top: "50%",
  },
  instanceItemLayout: {
    height: 43,
    width: 79,
    position: "absolute",
  },
  textPosition: {
    color: "#000",
    fontFamily: "Pretendard Variable",
    lineHeight: 38,
    letterSpacing: 1,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  instanceChild: {
    marginTop: -42,
    marginLeft: -197.5,
    backgroundColor: "#fff",
    width: 393,
    height: 77,
    position: "absolute",
  },
  instanceItem: {
    marginTop: -21.5,
    marginLeft: -39.5,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    left: "50%",
    top: "50%",
  },
  text: {
    marginTop: -18.5,
    marginLeft: -21.5,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  rectangleGroup: {
    top: 14,
    left: 272,
  },
  name: {
    marginTop: -18,
    marginLeft: -87.5,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
  },
  profileImgIcon: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent: {
    alignSelf: "stretch",
    height: 70,
  },
});

export default FrameComponent2;
