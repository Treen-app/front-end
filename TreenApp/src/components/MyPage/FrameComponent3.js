import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const FrameComponent3 = ({ property1 = "Default" }) => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.frameChildPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <Text style={styles.text}>남</Text>
      </View>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={[styles.rectangleWrapper, styles.frameChildPosition]}>
          <View style={styles.groupPosition} />
        </View>
        <Text style={[styles.text1, styles.textTypo]}>여</Text>
      </View>
      <View style={[styles.frameView, styles.frameLayout]}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../../img/Mypage/group-113.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>미정</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 38,
    position: "absolute",
    top: 0,
    height: 38,
  },
  frameChildPosition: {
    left: "50%",
    top: "50%",
    marginTop: -19,
  },
  groupPosition: {
    backgroundColor: "#f0f0f0",
    left: "50%",
    top: "50%",
    marginLeft: -19,
    marginTop: -19,
    width: 38,
    position: "absolute",
    height: 38,
  },
  textTypo: {
    left: 12,
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 14,
    top: 9,
    position: "absolute",
  },
  frameLayout: {
    width: 52,
    position: "absolute",
    height: 38,
  },
  groupChild: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  rectangleWrapper: {
    marginLeft: -19,
    top: "50%",
    marginTop: -19,
    width: 38,
    position: "absolute",
    height: 38,
  },
  text: {
    left: 13,
    color: "#a0a0a0",
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 14,
    top: 9,
    position: "absolute",
  },
  groupParent: {
    left: 0,
  },
  text1: {
    color: "#aaa",
  },
  groupContainer: {
    left: 39,
  },
  frameChild: {
    marginLeft: -26,
    left: "50%",
    top: "50%",
    marginTop: -19,
    width: 52,
  },
  text2: {
    color: "#fff",
  },
  frameView: {
    left: 78,
    width: 52,
    top: 0,
  },
  frameParent: {
    width: 130,
    height: 38,
  },
});

export default FrameComponent3;
