import * as React from "react";
import { StyleSheet, View } from "react-native";
import ProcessTxt from "./ProcessTxt";
import Component17 from "./Component17";
import FrameComponent5 from "./FrameComponent5";

const Frame5 = () => {
  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <ProcessTxt prop="전화번호를 입력해주세요" prop1="01 본인인증" />
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Component17 />
        <FrameComponent5 showFrameView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
    width: 337,
  },
  frame1: {
    height: 96,
    gap: 12,
  },
  frame: {
    height: 188,
    justifyContent: "center",
    gap: 43,
  },
});

export default Frame5;
