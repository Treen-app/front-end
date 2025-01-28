import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import ProcessBtnVariant from "../../components/MyPage/ProcessBtnVariant";
import UpBar from "../../components/MyPage/UpBar";

const CompleteEditPhone = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{`전화번호가 성공적으로
수정되었습니다`}</Text>
      <ProcessBtnVariant
        prop="완료"
        processBtnVariant3Position="absolute"
        processBtnVariant3Top={756}
        processBtnVariant3Left={28}
      />
      <UpBar
        upBarMarginLeft={-161.5}
        arrow2={require("../../img/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="회원정보 수정"
        textMarginLeft={-53.5}
        upBarPosition="absolute"
        upBarTop={53}
        upBarLeft="50%"
        group187={require("../../img/Mypage/group-1871.svg")}
        showGroupIcon
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    marginLeft: -81.5,
    top: 190,
    left: "50%",
    fontSize: 18,
    letterSpacing: 1,
    lineHeight: 26,
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

export default CompleteEditPhone;
