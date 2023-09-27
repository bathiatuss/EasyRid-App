import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppButon from "../components/AppButton";
import AppText from "../components/AppText/AppText";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

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

        <View style={styles.flatlist}>
          <ListItem
            title={"My Listings"}
            ImageComponent={
              <Icon
                name={"format-list-bulleted"}
                backgroundColor={colors.primary}
              />
            }
          />
          <ListItemSeperator />
          <ListItem
            title={"My Messages"}
            ImageComponent={
              <Icon name={"email"} backgroundColor={colors.secondary} />
            }
          />
        </View>

        <View style={styles.logout}>
          <ListItem
            title={"Log Out"}
            ImageComponent={
              <Icon name={"logout"} backgroundColor={colors.yellow} />
            }
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
  flatlist: {
    marginTop: 10,
  },
  logout: {
    marginTop: 15,
  },
});

export default MyAccountScreen;
