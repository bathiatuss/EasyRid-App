import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, styles.view]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight, //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
