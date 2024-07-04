import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null; //FIXME: FIXED not shown on screen

  return (
    <LottieView
      style={{
        flex: 1,
      }}
      autoPlay
      loop //FIXME: the loader is so big. fix it
      source={require("../assets/animations/loader.json")}
    />
  );
}

export default ActivityIndicator;
