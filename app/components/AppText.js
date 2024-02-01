import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, style, numberOfLines }) {
  return (
    <Text numberOfLines={numberOfLines} style={[defaultStyles.Text, style]}>
      {children}
    </Text>
  );
}

export default AppText;
