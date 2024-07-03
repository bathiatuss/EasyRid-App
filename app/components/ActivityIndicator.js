import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null; //FIXME: not shown on screen
  return <LottieView source={require("../assets/animations/loader.json")} />;
}

export default ActivityIndicator;
