import React, { useState } from "react";
import { Text, StyleSheet, View, SectionList } from "react-native";
import FrameComponent2 from "../components/MyPage/FrameComponent2";
import UpBar from "../components/MyPage/UpBar";
import Frame25Variant1 from "../components/MyPage/Frame25Variant1";

const ViewFollow = () => {
  const [frameSectionListData, setFrameSectionListData] = useState([]);

  return (
    <View style={styles.view}>
      <View style={styles.searchParent}>
        <View style={styles.search}>
          <Text style={styles.text}>팔로잉 검색</Text>
        </View>
        <View style={styles.instanceParent}>
          <SectionList
            style={styles.frameChild}
            sections={frameSectionListData}
            renderItem={(props) => props.item}
            renderSectionHeader={(props) => props.section.headerComponent}
          />
          <FrameComponent2 />
          <FrameComponent2 />
          <FrameComponent2 />
          <FrameComponent2 />
          <FrameComponent2 />
          <FrameComponent2 />
        </View>
      </View>
      <UpBar
        upBarMarginLeft="unset"
        showArrowIcon={false}
        arrowIconMaxHeight="unset"
        prop="닉네임"
        textMarginLeft={-25.5}
        upBarPosition="absolute"
        upBarTop={54}
        upBarLeft={35}
        group187={require("../../img/Mypage/group-1871.svg")}
        showGroupIcon
      />
      <Frame25Variant1 prop="팔로워" prop1="팔로잉" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Pretendard Variable",
    color: "#a0a0a0",
    textAlign: "left",
  },
  search: {
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 350,
    height: 46,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: "flex-end",
  },
  frameChild: {
    alignSelf: "stretch",
    flex: 1,
  },
  instanceParent: {
    gap: 15,
    width: 351,
  },
  searchParent: {
    position: "absolute",
    top: 156,
    left: 21,
    gap: 32,
    justifyContent: "flex-end",
    width: 351,
  },
  view: {
    backgroundColor: "#fff",
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default ViewFollow;
