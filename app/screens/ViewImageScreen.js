import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={35}
        color="white"
      />

      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        size={35}
        color="white"
      />
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
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    left: 30,
    top: 60,
  },
  deleteIcon: {
    position: "absolute",
    right: 30,
    top: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
