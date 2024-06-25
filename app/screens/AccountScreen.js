import { View, StyleSheet, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    targetScreen: routes.MESSAGES, //FIXME: fix the targetScreen property later
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem //FIXME:  its not shown on screen
          title="atakan"
          subTitle="atakanbaltac-1@hotmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.item}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ListItemSeparator={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        ></FlatList>
      </View>
      <ListItem
        title={"Log Out"}
        ListItemSeparator={
          <Icon name={"logout"} backgroundColor={colors.yellow} />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
