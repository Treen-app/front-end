import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import UpBar from "../components/MyPage/UpBar";
import ProcessBtnVariant from "../components/MyPage/ProcessBtnVariant";

const Ask = () => {
  return (
    <View style={styles.view}>
      <Text style={[styles.text, styles.textTypo]}>
        이용시 불편 사항을 말씀해주세요
      </Text>
      <View style={styles.wrapper}>
        <Text style={[styles.text1, styles.textTypo]}>
          앱을 사용하면서 불편했던 사항을 입력해주세요
        </Text>
      </View>
      <UpBar
        upBarMarginLeft={-161.5}
        arrow2={require("../../img/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="문의하기"
        textMarginLeft={-34.5}
        upBarPosition="absolute"
        upBarTop={54}
        upBarLeft="50%"
        group187={require("../../img/Mypage/group-187.svg")}
        showGroupIcon
      />
      <ProcessBtnVariant prop="전달하기" />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    lineHeight: 20,
    position: "absolute",
  },
  text: {
    top: 138,
    left: 36,
    fontSize: 22,
    letterSpacing: 0.1,
    fontWeight: "700",
    color: "#000",
  },
  text1: {
    top: 11,
    left: 20,
    fontSize: 14,
    fontWeight: "500",
    color: "#a0a0a0",
  },
  wrapper: {
    marginTop: -222,
    marginLeft: -168.5,
    top: "50%",
    left: "50%",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    width: 337,
    height: 119,
    position: "absolute",
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Ask;
