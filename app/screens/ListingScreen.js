import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import { FlatList } from "react-native";
import routes from "../navigation/routes";

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

function ListingScreen({ navigation }) {
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

const styles = StyleSheet.create({});

export default ListingScreen;
