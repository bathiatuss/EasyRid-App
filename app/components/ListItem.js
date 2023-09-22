import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.sellerInfo}>
        <AppText style={styles.sellerName}>{title}</AppText>
        <AppText style={styles.sellerListings}>
          {subTitle + " Listings"}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "blue",
  },
  sellerInfo: { flexDirection: "column" },
  image: { height: 70, width: 70, borderRadius: 35, marginRight: 10 },
  sellerName: { fontWeight: "500" },
  sellerListings: { color: colors.medium },
});

export default ListItem;
