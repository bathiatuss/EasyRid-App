import React, { useState } from "react";
import { Text } from "react-native";
import { TextInput, Switch } from "react-native";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";

import colors from "./app/config/colors";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Furniture", value: 1, icon: "floor-lamp", color: "#fc5c65" },
  { label: "Cars", value: 2, icon: "car", color: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", color: "#fed330" },
  { label: "Games", value: 4, icon: "cards", color: "#26de81" },
  { label: "Clothing", value: 5, icon: "shoe-heel", color: "#2bcbba" },
  { label: "Sports", value: 6, icon: "basketball", color: "#45aaf2" },
  { label: "Movies & Music", value: 7, icon: "headphones", color: "#4b7bec" },
  {
    label: "Books",
    value: 8,
    icon: "book-open-blank-variant",
    color: "#884ab4",
  },
  {
    label: "Other",
    value: 9,
    icon: "page-layout-header",
    color: "#5e6f81",
  },
];

export default function App(props) {
  return (
    <Screen>
      <AppPicker numColumns={3} items={categories} placeholder="Category" />
    </Screen>
  );
}
