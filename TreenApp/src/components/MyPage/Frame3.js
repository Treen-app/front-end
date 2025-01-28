import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBoxBtn from "./CheckBoxBtn";

const Frame3 = () => {
  return (
    <View style={styles.frame}>
      <Text style={styles.text}>신고 사유를 말씀해주세요</Text>
      <View style={styles.checkboxBtnParent}>
        <CheckBoxBtn
          property1="Default"
          prop="욕설 및 타인 비하"
          showVectorIcon
          checkBoxBtnPosition="relative"
          checkBoxBtnMarginLeft="unset"
          checkBoxBtnTop="unset"
          checkBoxBtnLeft="unset"
          checkBoxBtnWidth="unset"
          checkBoxBtnAlignSelf="stretch"
        />
        <CheckBoxBtn
          property1="Default"
          prop="상업적 광고"
          showVectorIcon={false}
          checkBoxBtnPosition="relative"
          checkBoxBtnMarginLeft="unset"
          checkBoxBtnTop="unset"
          checkBoxBtnLeft="unset"
          checkBoxBtnWidth="unset"
          checkBoxBtnAlignSelf="stretch"
        />
        <CheckBoxBtn
          property1="Default"
          prop="낚시 / 도배"
          showVectorIcon={false}
          checkBoxBtnPosition="relative"
          checkBoxBtnMarginLeft="unset"
          checkBoxBtnTop="unset"
          checkBoxBtnLeft="unset"
          checkBoxBtnWidth="unset"
          checkBoxBtnAlignSelf="stretch"
        />
        <CheckBoxBtn
          property1="Default"
          prop="음란물 / 불건전 만남"
          showVectorIcon={false}
          checkBoxBtnPosition="relative"
          checkBoxBtnMarginLeft="unset"
          checkBoxBtnTop="unset"
          checkBoxBtnLeft="unset"
          checkBoxBtnWidth="unset"
          checkBoxBtnAlignSelf="stretch"
        />
        <CheckBoxBtn
          property1="Default"
          prop="유출 / 사칭 / 사기"
          showVectorIcon={false}
          checkBoxBtnPosition="relative"
          checkBoxBtnMarginLeft="unset"
          checkBoxBtnTop="unset"
          checkBoxBtnLeft="unset"
          checkBoxBtnWidth="unset"
          checkBoxBtnAlignSelf="stretch"
        />
        <CheckBoxBtn
          property1="Default"
          prop="정치인 비하"
          showVectorIcon={false}
          checkBoxBtnPosition="relative"
          checkBoxBtnMarginLeft="unset"
          checkBoxBtnTop="unset"
          checkBoxBtnLeft="unset"
          checkBoxBtnWidth="unset"
          checkBoxBtnAlignSelf="stretch"
        />
        <CheckBoxBtn
          property1="Default"
          prop="기타"
          showVectorIcon={false}
          checkBoxBtnPosition="relative"
          checkBoxBtnMarginLeft="unset"
          checkBoxBtnTop="unset"
          checkBoxBtnLeft="unset"
          checkBoxBtnWidth="unset"
          checkBoxBtnAlignSelf="stretch"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "center",
    width: 393,
  },
  checkboxBtnParent: {
    width: 361,
    gap: 10,
  },
  frame: {
    height: 432,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: 393,
  },
});

export default Frame3;
