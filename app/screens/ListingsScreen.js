import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";

import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import Card from "../components/Card";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
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
