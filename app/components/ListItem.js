import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      {
        //swipeable component is not working properly. we need to wrap it inside the gestureHandlerRootView
      }
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.sellerInfo}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  sellerInfo: { flexDirection: "column" },
  image: { height: 70, width: 70, borderRadius: 35, marginRight: 10 },
  title: { fontSize: 24 },
  subTitle: { color: colors.medium },
  title: { fontSize: 24 },
  subTitle: { color: colors.medium },
});

export default ListItem;
