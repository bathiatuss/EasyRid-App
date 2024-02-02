import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  placeholder,
  items,
  containerWidth,
  onSelectItem,
  selectedItem,
  numColumns,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: containerWidth }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button
          color={defaultStyles.colors.primary}
          title="Close"
          onPress={() => setModalVisible(false)}
        />
        <Screen style={styles.screen}>
          <FlatList
            columnWrapperStyle={{
              //flex:1,//its not change anything when its removed
              justifyContent: "space-around",
              height: 120,
              alignContent: "space-between",
            }}
            numColumns={numColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    padding: 10,
                    backgroundColor: item.color,
                  }}
                >
                  <MaterialCommunityIcons // icons are not touchable!!!BUG
                    name={item.icon}
                    size={50}
                    color={defaultStyles.colors.white}
                  />
                </View>
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                ></PickerItem>
              </View>
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "%100",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  screen: {},
});
