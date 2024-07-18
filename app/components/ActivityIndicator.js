import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null; //FIXME: FIXED not shown on screen

  return (
    <LottieView
      style={styles.overlay}
      autoPlay
      loop //FIXME: FIXED default(mosh's) loader used. your loader is so big. fix it.
      source={require("../assets/animations/loader.json")}
    />
  );
}

const styles = StyleSheet.create({
  overlay: {
    zIndex: 1,
    flex: 1, //necessary!!
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
