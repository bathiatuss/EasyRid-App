import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";
import Card from "../components/Card";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn' the retrieve the listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator
        visible={getListingsApi.loading}
        //FIXME: not shown on the screen
      />
      <FlatList
        data={getListingsApi.data}
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
    //padding: 20, //FIXME: check out - removed for rational adjustment
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
