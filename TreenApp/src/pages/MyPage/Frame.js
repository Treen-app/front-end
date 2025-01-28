import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import RectangleComponent1 from "../../components/MyPage/RectangleComponent1";
import Header from "../../components/MyPage/Header";
import ScoreInfo from "../../components/MyPage/ScoreInfo";
import Frame25Variant from "../../components/MyPage/Frame25Variant";
import GroupComponent from "../../components/MyPage/GroupComponent";

const Frame = () => {
  return (
    <View style={styles.view}>
      <ScrollView style={styles.peedButtons}>
        <RectangleComponent1 showVectorIcon={false} />
        <RectangleComponent1
          showVectorIcon
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
        <RectangleComponent1
          showVectorIcon={false}
          rectangleViewPosition="absolute"
          rectangleViewHeight="100%"
          rectangleViewTop="0%"
          rectangleViewRight="0%"
          rectangleViewBottom="0%"
          rectangleViewLeft="0%"
          rectangleViewBorderRadius={10}
          rectangleViewBackgroundColor="#d9d9d9"
        />
      </ScrollView>
      <Header />
      <ScoreInfo />
      <Frame25Variant />
      <GroupComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  peedButtons: {
    position: "absolute",
    marginLeft: -188.5,
    top: 377,
    left: "50%",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center",
    gap: 8,
    width: "100%",
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    height: 852,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
