import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import Card from "../components/Card";
const listings = [
  {
    id: 1,
    title: "Sıla's Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Yaren's Couch in great condition",
    price: 1500,
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    //padding: 20, removed for rational adjustment
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
