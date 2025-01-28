import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import UpBar from "../../components/MyPage/UpBar";
import ProcessBtn from "../../components/MyPage/ProcessBtn";
import ProcessBtnVariant from "../../components/MyPage/ProcessBtnVariant";

const Quit3 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>정말로 탈퇴하시겠습니까?</Text>
      <UpBar
        upBarMarginLeft={-170.5}
        showArrowIcon={false}
        arrowIconMaxHeight="unset"
        prop="회원 탈퇴"
        textMarginLeft={-36.5}
        upBarPosition="absolute"
        upBarTop={63}
        upBarLeft="50%"
        group187={require("../../img/Mypage/group-1871.svg")}
        showGroupIcon
      />
      <ProcessBtn
        property1="Default"
        prop="돌아가기"
        processBtnPosition="absolute"
        processBtnMarginLeft={-168.5}
        processBtnTop={693}
        processBtnLeft="50%"
      />
      <ProcessBtnVariant
        prop="탈퇴하기"
        processBtnVariant3Position="absolute"
        processBtnVariant3Top={756}
        processBtnVariant3Left={28}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 190,
    left: 87,
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "center",
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Quit3;
