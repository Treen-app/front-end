import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Pagebtn from "../../img/Mypage/page-btn.svg";
import ItemBtn from "../components/MyPage/ItemBtn";
import UpBar from "../components/MyPage/UpBar";
import Frame25Variant1 from "../components/MyPage/Frame25Variant1";

const ViewTrade = () => {
  return (
    <View style={styles.view}>
      <Pagebtn style={styles.pageBtnIcon} width={148} height={18} />
      <View style={styles.instanceParent}>
        <ItemBtn />
        <ItemBtn />
        <ItemBtn />
        <ItemBtn />
      </View>
      <UpBar
        upBarMarginLeft={-161.5}
        showArrowIcon={false}
        arrowIconMaxHeight="unset"
        prop="거래내역"
        textMarginLeft={-34.5}
        upBarPosition="absolute"
        upBarTop={54}
        upBarLeft="50%"
        group187={require("../../img/Mypage/group-1871.svg")}
        showGroupIcon
      />
      <Frame25Variant1
        frame25Variant3Top={108}
        frame25Variant3Left={19}
        prop="거래"
        textLeft={75}
        textFontWeight="600"
        textColor="#04ad45"
        prop1="교환"
        textLeft1={246}
        textFontWeight1="500"
        textColor1="#000"
        lineIconMarginLeft={-128}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageBtnIcon: {
    top: 755,
    left: 137,
    position: "absolute",
  },
  instanceParent: {
    top: 171,
    left: 16,
    width: 361,
    gap: 16,
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

export default ViewTrade;
