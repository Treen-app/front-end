import * as React from "react";
import { StyleSheet, View } from "react-native";
import UpBar from "../../components/MyPage/UpBar";
import Frame5 from "../../components/MyPage/Frame5";

const EditPwd = () => {
  return (
    <View style={styles.view}>
      <UpBar
        upBarMarginLeft={2}
        showArrowIcon={false}
        arrowIconMaxHeight="unset"
        prop="비밀번호 재설정"
        textMarginLeft={-61.5}
        upBarPosition="unset"
        upBarTop="unset"
        upBarLeft="unset"
        group187={require("../../img/Mypage/group-187.svg")}
        showGroupIcon
      />
      <Frame5 />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingVertical: 54,
    gap: 20,
  },
});

export default EditPwd;
