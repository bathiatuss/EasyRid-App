import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import colors from "../config/colors";

function Screen(props) {
  return <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, //expo constants statusbarheight
    flex: 1,
  },
});

export default Screen;
