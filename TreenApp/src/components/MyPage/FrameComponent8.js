import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import SmallTitle from "./SmallTitle";

const FrameComponent8 = () => {
  return (
    <View style={styles.parent}>
      <SmallTitle prop="오늘" />
      <View style={styles.groupParent}>
        <View style={styles.groupPosition}>
          <View style={styles.groupPosition}>
            <View style={[styles.groupChild, styles.groupPosition]} />
          </View>
        </View>
        <View style={styles.wrapper}>
          <Text style={[styles.text, styles.textTypo]}>
            교환 +10 트린을 얻었습니다!
          </Text>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>2025. 01. 12</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    top: "50%",
    marginTop: -23,
    height: 46,
    width: 361,
    left: "50%",
    marginLeft: -180.5,
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
  },
  text: {
    marginLeft: -79.5,
    top: 0,
    color: "#000",
  },
  wrapper: {
    marginLeft: -158.5,
    width: 159,
    height: 18,
    top: 15,
    left: "50%",
    position: "absolute",
  },
  text1: {
    marginLeft: 81.5,
    color: "#afafaf",
    display: "none",
    top: 15,
  },
  groupParent: {
    top: 27,
    height: 46,
    width: 361,
    marginLeft: -180.5,
    left: "50%",
    position: "absolute",
  },
  parent: {
    alignSelf: "stretch",
    height: 73,
  },
});

export default FrameComponent8;
