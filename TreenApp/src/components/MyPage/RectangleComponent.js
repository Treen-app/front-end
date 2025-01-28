import * as React from "react";
import { StyleSheet, View } from "react-native";

const RectangleComponent = () => {
  return <View style={styles.groupChild} />;
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    marginTop: -23,
    marginLeft: -180.5,
    top: "50%",
    left: "50%",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 361,
    height: 46,
  },
});

export default RectangleComponent;
