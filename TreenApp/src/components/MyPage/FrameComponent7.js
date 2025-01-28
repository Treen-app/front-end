import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import FrameComponent from "./FrameComponent";
import SmallTitle from "./SmallTitle";

const FrameComponent7 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.instanceParent}>
        <FrameComponent
          frameViewAlignSelf="stretch"
          frameViewPosition="relative"
          frameViewMarginLeft="unset"
          frameViewTop="unset"
          frameViewLeft="unset"
          frameViewWidth="unset"
          groupViewWidth={232}
          textMarginLeft={-116}
          textColor="unset"
          showText={false}
        />
        <FrameComponent
          frameViewAlignSelf="stretch"
          frameViewPosition="relative"
          frameViewMarginLeft="unset"
          frameViewTop="unset"
          frameViewLeft="unset"
          frameViewWidth="unset"
          groupViewWidth={232}
          textMarginLeft={-116}
          textColor="unset"
          showText={false}
        />
        <FrameComponent
          frameViewAlignSelf="stretch"
          frameViewPosition="relative"
          frameViewMarginLeft="unset"
          frameViewTop="unset"
          frameViewLeft="unset"
          frameViewWidth="unset"
          groupViewWidth={232}
          textMarginLeft={-116}
          textColor="unset"
          showText={false}
        />
        <View style={styles.groupParent}>
          <View style={[styles.groupWrapper, styles.wrapperGroupPosition]}>
            <View style={[styles.groupWrapper, styles.wrapperGroupPosition]}>
              <View style={[styles.groupChild, styles.wrapperGroupPosition]} />
            </View>
          </View>
          <View style={[styles.wrapper, styles.wrapperGroupPosition]}>
            <Text style={[styles.text, styles.textTypo]}>
              교환 +10 트린을 얻었습니다!
            </Text>
          </View>
          <Text style={[styles.text1, styles.textTypo]}>2025. 01. 12</Text>
        </View>
        <View style={styles.groupParent}>
          <View style={[styles.groupWrapper, styles.wrapperGroupPosition]}>
            <View style={[styles.groupWrapper, styles.wrapperGroupPosition]}>
              <View style={[styles.groupChild, styles.wrapperGroupPosition]} />
            </View>
          </View>
          <View style={[styles.wrapper, styles.wrapperGroupPosition]}>
            <Text style={[styles.text, styles.textTypo]}>
              교환 +10 트린을 얻었습니다!
            </Text>
          </View>
          <Text style={[styles.text1, styles.textTypo]}>2025. 01. 12</Text>
        </View>
      </View>
      <View style={styles.frame}>
        <SmallTitle prop="읽지 않음" />
        <Text style={styles.text4}>모두 읽기</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperGroupPosition: {
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    lineHeight: 18,
    fontSize: 14,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    top: "50%",
    marginLeft: -180.5,
    marginTop: -23,
    left: "50%",
    height: 46,
    width: 361,
  },
  groupWrapper: {
    top: "50%",
    marginLeft: -180.5,
    marginTop: -23,
    left: "50%",
    height: 46,
    width: 361,
  },
  text: {
    marginLeft: -79.5,
    color: "#000",
    top: 0,
  },
  wrapper: {
    marginLeft: -158.5,
    width: 159,
    height: 18,
    top: 15,
  },
  text1: {
    marginLeft: 81.5,
    color: "#afafaf",
    display: "none",
    top: 15,
  },
  groupParent: {
    height: 46,
    alignSelf: "stretch",
  },
  instanceParent: {
    top: 28,
    gap: 10,
    width: 361,
    left: 0,
    position: "absolute",
  },
  text4: {
    top: 1,
    left: 303,
    color: "#8d8d8d",
    textAlign: "right",
    fontFamily: "Pretendard Variable",
    lineHeight: 18,
    fontSize: 14,
    position: "absolute",
  },
  frame: {
    width: 355,
    height: 19,
    overflow: "hidden",
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameParent: {
    height: 298,
    alignSelf: "stretch",
  },
});

export default FrameComponent7;
