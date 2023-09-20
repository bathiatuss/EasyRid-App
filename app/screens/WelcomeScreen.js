import React from "react";
import {
  StyleSheet,
  ImageBackground,
  requireNativeComponent,
  View,
  Image,
  Text,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/test_logo.png")}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton} />
      <View style={styles.registerButton} />
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
  loginButton: {
    width: "100%",
    height: 100,
    backgroundColor: "#fc5c65",
  },
  logo: {
    height: 100,
    width: 100,
  },
  registerButton: {
    width: "100%",
    height: 100,
    backgroundColor: "#4ecdc4",
  },
});

export default WelcomeScreen;
