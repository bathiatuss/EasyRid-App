import React from "react";
import {
  StyleSheet,
  ImageBackground,
  requireNativeComponent,
  View,
  Image,
  Text,
} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={5}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/test_logo.png")}
        />
        <AppText>Sell What You Don't Need</AppText>
      </View>
      <AppButton title="Login" onPress={() => console.log("Logged In")} />
      <AppButton
        title="Register"
        backgroundColor={colors.secondary}
        onPress={() => console.log("Registered")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: { position: "absolute", top: 70, alignItems: "center" },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 15,
  },
});

export default WelcomeScreen;
