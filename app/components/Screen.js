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
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    //FIXME: it causes extra padding problem on listinedit and account screens
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
