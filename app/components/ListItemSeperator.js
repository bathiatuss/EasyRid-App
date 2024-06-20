import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    widht: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
