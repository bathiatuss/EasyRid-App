import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
import defaultStyle from "../config/styles";

function PickerItem({ label, onPress, ...otherProps }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText /* ...otherProps */ style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // its causes bug in appPicker component
  // text: {
  //   padding: 20,
  //   backgroundColor: defaultStyle.colors.light,
  // },
});

export default PickerItem;
