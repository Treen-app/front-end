import * as React from "react";
import { StyleSheet, View } from "react-native";
import UpBar from "../components/MyPage/UpBar";
import Frame3 from "../components/MyPage/Frame3";
import ProcessBtn from "../components/MyPage/ProcessBtn";

const Report = () => {
  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <UpBar
        upBarMarginLeft="unset"
        arrow2={require("../../img/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="계정 신고하기"
        textMarginLeft={-53.5}
        upBarPosition="relative"
        upBarTop="unset"
        upBarLeft="unset"
        group187={require("../../img/Mypage/group-187.svg")}
        showGroupIcon
      />
      <View style={[styles.frame, styles.viewFlexBox]}>
        <Frame3 />
        <ProcessBtn property1="Default" prop="확인" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  frame: {
    alignSelf: "stretch",
    height: 688,
    gap: 206,
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 44,
    gap: 28,
  },
});

export default Report;
