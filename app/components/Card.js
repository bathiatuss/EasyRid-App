import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.background}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { backgroundColor: "#f8f4f4" },
  cardContainer: {
    backgroundColor: "#fff",
    margin: 20,
    marginTop: 80,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: "100%",
  },
  detailsContainer: { fontWeight: "bold", padding: 15 },
  title: { marginBottom: 5 },
  subTitle: { color: colors.secondary },
});

export default Card;
