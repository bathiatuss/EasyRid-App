import {
  TouchableOpacity,
  View,
  StyleSheet,
  Touchablei,
  Image,
} from "react-native";
import { React, useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

export default function ImageInput({ imageUri, onChangeImage }) {
  //permission request process
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to library");
  };

  useEffect(() => {
    requestPermission;
  }, []);

  //image selection process
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={selectImage}>
      {imageUri ? ( //for showing more than one image use flatlist* create imageinputlist comp.
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <MaterialCommunityIcons
          name="camera"
          size={30}
          color={defaultStyles.colors.medium}
        />
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  image: { marginLeft: 50, width: 100, borderRadius: 20, height: 100 },
  container: {
    borderRadius: 7,
    height: 50,
    width: 50,
    backgroundColor: defaultStyles.colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
