import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
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
    paddingTop: Constants.StatusBarHeight, //Platform.OS === "android" ? Constants.statusBarHeight : 0, previous code
    //FIXME: FIXED it causes extra padding problem on listinedit and account screens
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
