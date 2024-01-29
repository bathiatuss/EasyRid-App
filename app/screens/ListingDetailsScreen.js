import React from "react";
import Card from "../components/Card";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title={"Atakan Baltacı"}
            subTitle={"5 Listings"}
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  detailsContainer: { padding: 20 },
  title: { fontSize: 24 },
  price: { color: colors.secondary, fontSize: 20, marginVertical: 10 },
  userContainer: { marginVertical: 50 },
});

export default ListingDetailsScreen;
