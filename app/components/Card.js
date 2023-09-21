import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.background}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
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
  paddingBottom: 20,
  title: {
    fontWeight: "bold",
    paddingLeft: 15,
    paddingBottom: 5,
    paddingTop: 15,
  },
  subTitle: {
    fontWeight: "bold",
    paddingLeft: 15,
    color: "lightgreen",
    paddingBottom: 15,
  },
});

export default Card;
