import React from "react";
import { View, Image, StyleSheet } from "react-native";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    left: 30,
    top: 40,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    right: 30,
    top: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
