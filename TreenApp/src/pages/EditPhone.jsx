import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent5 from "../components/MyPage/FrameComponent5";
import UpBar from "../components/MyPage/UpBar";
import Frame6 from "../components/MyPage/Frame6";

const EditPhone = () => {
  return (
    <View style={styles.view}>
      <FrameComponent5
        showFrameView={false}
        frameViewPosition="absolute"
        frameViewTop={258}
        frameViewLeft={28}
      />
      <View style={styles.frame}>
        <UpBar
          upBarMarginLeft="unset"
          showArrowIcon={false}
          arrowIconMaxHeight="unset"
          prop="회원정보 수정"
          textMarginLeft={-53.5}
          upBarPosition="relative"
          upBarTop="unset"
          upBarLeft="unset"
          group187={require("../../img/Mypage/group-187.svg")}
          showGroupIcon
        />
      </View>
      <Frame6 />
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 53,
    left: 28,
    width: 330,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default EditPhone;
