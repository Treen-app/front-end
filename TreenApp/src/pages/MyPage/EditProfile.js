import * as React from "react";
import { StyleSheet, View } from "react-native";
import UpBar from "../../components/MyPage/UpBar";
import Frame4 from "../../components/MyPage/Frame4";
import ProcessBtnVariant from "../../components/MyPage/ProcessBtnVariant";

const EditProfile = () => {
  return (
    <View style={[styles.view, styles.viewFlexBox]}>
      <UpBar
        upBarMarginLeft="unset"
        arrow2={require("../../img/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="프로필 변경"
        textMarginLeft={-45.5}
        upBarPosition="relative"
        upBarTop="unset"
        upBarLeft="unset"
        group187={require("../../img/Mypage/group-1871.svg")}
        showGroupIcon
      />
      <View style={[styles.frame, styles.viewFlexBox]}>
        <Frame4 />
        <ProcessBtnVariant
          prop="저장"
          processBtnVariant3Position="relative"
          processBtnVariant3Top="unset"
          processBtnVariant3Left="unset"
        />
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
    width: 337,
    height: 689,
    gap: 90,
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    justifyContent: "center",
    paddingHorizontal: 28,
    paddingVertical: 46,
    gap: 25,
  },
});

export default EditProfile;
