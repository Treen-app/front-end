import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import UpBar from "../../components/MyPage/UpBar";
import ProcessBtn from "../../components/MyPage/ProcessBtn";

const Quit2 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>비밀번호 입력</Text>
      <View style={[styles.pwdInputbox, styles.pwdLayout]}>
        <View style={[styles.pwdInputboxChild, styles.pwdLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>******</Text>
      </View>
      <Text style={[styles.text2, styles.textTypo]}>
        비밀번호가 일치하지 않습니다
      </Text>
      <UpBar
        upBarMarginLeft={-170.5}
        arrow2={require("../../img/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="회원 탈퇴"
        textMarginLeft={-36.5}
        upBarPosition="absolute"
        upBarTop={63}
        upBarLeft="50%"
        group187={require("../../img/Mypage/group-187.svg")}
        showGroupIcon
      />
      <ProcessBtn
        property1="Default"
        prop="완료"
        processBtnPosition="absolute"
        processBtnMarginLeft={-168.5}
        processBtnTop={260}
        processBtnLeft="50%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pwdLayout: {
    height: 42,
    width: 336,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    lineHeight: 20,
    fontFamily: "Pretendard Variable",
    position: "absolute",
  },
  text: {
    top: 120,
    left: 142,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "#000",
    fontFamily: "Pretendard Variable",
    position: "absolute",
  },
  pwdInputboxChild: {
    marginTop: -21,
    marginLeft: -168,
    top: "50%",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    left: "50%",
  },
  text1: {
    top: 14,
    left: 25,
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "500",
    color: "#000",
  },
  pwdInputbox: {
    top: 170,
    left: 28,
  },
  text2: {
    marginLeft: -162.5,
    top: 220,
    fontSize: 14,
    color: "#04ad45",
    left: "50%",
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Quit2;
