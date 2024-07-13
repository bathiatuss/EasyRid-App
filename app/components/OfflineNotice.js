import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppText from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNotice() {
  const netInfo = useNetInfo();
  console.log(netInfo); //TODO: remove

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable == false) {
    return (
      <View style={styles.container}>
        <AppText style={{ color: colors.light }}>
          No Internet Connection
        </AppText>
      </View>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "android" ? Constants.statusBarHeight : 0,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: 50, //mosh --> absolute, top:50
    zIndex: 1,
  },
});
