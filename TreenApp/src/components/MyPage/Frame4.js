import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent4";

const Frame4 = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../../img/Mypage/group-67.png")}
        />
        <View style={styles.frame1}>
          <Text style={styles.text}>변경</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Text style={styles.text1}>닉네임</Text>
          <View style={styles.inputbox} />
        </View>
        <View style={styles.group}>
          <Text style={styles.text2}>성별</Text>
          <FrameComponent3 property1="Default" />
        </View>
        <View style={styles.container}>
          <Text style={styles.text3}>생년월일</Text>
          <View style={styles.frame2}>
            <View style={styles.frame3}>
              <View style={styles.frameItem} />
              <Text style={styles.text4}>년</Text>
            </View>
            <View style={styles.frame4}>
              <View style={styles.frame5}>
                <View style={styles.frameInner} />
                <Text style={styles.text4}>월</Text>
              </View>
              <View style={styles.frame6}>
                <View style={styles.frameInner} />
                <Text style={styles.text4}>일</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frameView}>
          <Text style={styles.text3}>아이디</Text>
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild1} />
            <Text style={styles.text8}>@</Text>
            <View style={styles.frameChild2} />
          </View>
        </View>
        <View style={styles.parent1}>
          <Text style={styles.text9}>키</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild3} />
            <Text style={styles.cm}>cm</Text>
          </View>
        </View>
        <View style={styles.parent2}>
          <Text style={styles.text2}>몸무게</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild3} />
            <Text style={styles.cm}>kg</Text>
          </View>
        </View>
        <View style={styles.parent3}>
          <Text style={styles.text3}>발 사이즈</Text>
          <FrameComponent4 prop="210" prop1="310" />
        </View>
        <View style={styles.parent4}>
          <Text style={styles.text3}>옷 사이즈</Text>
          <FrameComponent4 prop="XS" prop1="4XL" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
  },
  text: {
    position: "relative",
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#fff",
    textAlign: "left",
    width: 29,
  },
  frame1: {
    position: "absolute",
    top: 40,
    left: 183,
    width: 29,
    height: 20,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  groupParent: {
    width: 100,
    height: 100,
    marginLeft: 1,
  },
  text1: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 56,
    height: 31,
  },
  inputbox: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: 200,
    height: 38,
  },
  parent: {
    width: 286,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
  },
  text2: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    width: 44,
  },
  group: {
    width: 216,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 42,
  },
  text3: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    width: 65,
  },
  frameItem: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: 62,
    height: 34,
  },
  text4: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Pretendard Variable",
    color: "#767676",
    textAlign: "left",
  },
  frame3: {
    width: 80,
    height: 34,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5,
  },
  frameInner: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: 40,
    height: 34,
  },
  frame5: {
    width: 58,
    height: 34,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 5,
  },
  frame6: {
    width: 57,
    height: 34,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 4,
  },
  frame4: {
    width: 123,
    height: 34,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  frame2: {
    width: 213,
    height: 34,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  container: {
    width: 299,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 21,
  },
  frameChild1: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: 111,
    height: 38,
  },
  text8: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 1,
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
  },
  frameChild2: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: 90,
    height: 38,
  },
  rectangleParent: {
    width: 224,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
  },
  frameView: {
    width: 310,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 21,
  },
  text9: {
    position: "relative",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    width: 26,
  },
  frameChild3: {
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: 50,
    height: 38,
  },
  cm: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    width: 23,
  },
  rectangleGroup: {
    width: 82,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 9,
  },
  parent1: {
    width: 168,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 60,
  },
  parent2: {
    width: 168,
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 42,
  },
  parent3: {
    width: 291,
    height: 36,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 17,
  },
  parent4: {
    width: 291,
    height: 34,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 17,
  },
  frameParent: {
    width: 310,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 17,
    height: 413,
    marginRight: 11,
  },
  frame: {
    width: 321,
    height: 549,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 36,
  },
});

export default Frame4;
