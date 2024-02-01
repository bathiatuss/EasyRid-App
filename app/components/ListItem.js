import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function ListItem({
  title,
  titleLines, //testing
  subTitle,
  subTitleLines, //testing
  image,
  ImageComponent,
  onPress,
  renderRightActions,
  showChevrons,
}) {
  return (
    <GestureHandlerRootView>
      {
        //swipeable component is not working properly. we need to wrap it inside the gestureHandlerRootView
      }
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
              {ImageComponent}
              {image && <Image style={styles.image} source={image}></Image>}
              <View style={styles.detailsContainer}>
                <AppText numberOfLines={titleLines} style={styles.title}>
                  {title}
                </AppText>
                {subTitle && (
                  <AppText
                    numberOfLines={subTitleLines}
                    style={styles.subTitle}
                  >
                    {subTitle}
                  </AppText>
                )}
              </View>
            </View>
            <View style={styles.chevron}>
              {showChevrons && (
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={30}
                ></MaterialCommunityIcons>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  leftContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  chevron: { flex: 1, justifyContent: "center" },
  detailsContainer: { marginLeft: 10, justifyContent: "center" },
  image: { height: 70, width: 70, borderRadius: 35 },
  title: { width: 250 },
  subTitle: { color: colors.medium, width: 250 },
});

export default ListItem;
