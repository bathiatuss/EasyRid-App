import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function MyAccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <ListItem
            title={"atakan"}
            subTitle={"atakanbaltac-1@hotmail.com"}
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  userContainer: {
    width: "100%",
    marginBottom: 20,
  },
});

export default MyAccountScreen;
