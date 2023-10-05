import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}> {label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default PickerItem;
