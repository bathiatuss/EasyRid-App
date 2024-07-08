import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress, numberOfLines = 2 }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.background}>
        <View style={styles.cardContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={numberOfLines} style={styles.title}>
              {title}
            </AppText>
            <AppText numberOfLines={numberOfLines} style={styles.subTitle}>
              {subTitle}
            </AppText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    margin: 15,
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
