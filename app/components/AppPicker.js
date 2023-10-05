import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { Platform } from "react-native";

import Screen from "./Screen";
import defaultStyles from "../config/styles";
import AppText from "./AppText/AppText";
import { Button } from "react-native";
import PickerItem from "./PickerItem";
function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  const categories = [
    {
      label: "Furniture",
      value: 1,
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Cameras",
      value: 3,
    },
  ];

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem : placeholder}
          </AppText>
          <MaterialCommunityIcons
            style={styles.icon}
            name={"chevron-down"}
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title={"Close"} onPress={() => setModalVisible(false)} />
        <FlatList
          data={categories}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem label={item.label} onPress={() => console.log(item)} />
          )}
        ></FlatList>
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
    marginTop: 3,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
