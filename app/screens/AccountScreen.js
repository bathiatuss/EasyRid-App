import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AppButon from "../components/AppButton";
import AppText from "../components/AppText/AppText";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    item: "My Listings",
    icon: { name: "format-list-bulleted" },
    backgroundColor: colors.primary,
  },
  {
    item: "My Messages",
    icon: { name: "email" },
    backgroundColor: colors.secondary,
  },
];

function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={"atakan"}
          subTitle={"atakanbaltac-1@hotmail.com"}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.item}
          renderItem={({ item }) => (
            <ListItem title={item.title} ImageComponent={item} />
          )}
        ></FlatList>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
