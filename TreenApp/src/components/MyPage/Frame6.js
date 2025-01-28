import * as React from "react";
import { StyleSheet, View } from "react-native";
import ProcessTxt from "./ProcessTxt";
import Component17 from "./Component17";

const Frame6 = () => {
  return (
    <View style={styles.frame}>
      <ProcessTxt
        prop="새로운 전화번호를 입력해주세요"
        prop1="휴대폰 번호 수정"
        processTxtMarginRight="unset"
        processTxtMarginLeft={8}
      />
      <Component17 />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 112,
    left: 28,
    width: 337,
    height: 134,
    overflow: "hidden",
    gap: 43,
  },
});

export default Frame6;
