import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.sellerInfo}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  sellerInfo: { flexDirection: "column" },
  image: { height: 70, width: 70, borderRadius: 35, marginRight: 10 },
  title: { fontSize: 24 },
  subTitle: { color: colors.medium },
});

export default ListItem;
