import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({
  title,
  titleLines = 1, //TODO: testing
  subTitle,
  subTitleLines = 2, //TODO: testing
  image,
  ListItemSeparator,
  onPress,
  renderRightActions,
  showChevrons = true,
}) {
  return (
    <GestureHandlerRootView>
      {/*FIXME: swipeable component is not working properly. we need to wrap it
      inside the gestureHandlerRootView.*/}
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ListItemSeparator}
            {image && <Image style={styles.image} source={image}></Image>}
            <View style={styles.detailsContainer}>
              <AppText numberOfLines={titleLines} style={styles.title}>
                {title}
              </AppText>
              {subTitle && (
                <AppText numberOfLines={subTitleLines} style={styles.subTitle}>
                  {subTitle}
                </AppText>
              )}
            </View>
            {showChevrons && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={25}
                color={colors.medium}
              ></MaterialCommunityIcons>
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
