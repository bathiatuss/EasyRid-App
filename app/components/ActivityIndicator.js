import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null; //FIXME: FIXED not shown on screen

  return (
    <LottieView
      style={{
        flex: 1, //necessary!!
      }}
      autoPlay
      loop //FIXME: FIXED default(mosh's) loader used. the loader is so big. fix it.
      source={require("../assets/animations/loader.json")}
    />
  );
}

export default ActivityIndicator;
