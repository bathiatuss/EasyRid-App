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
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AppFormPicker from "./app/components/forms/AppFormPicker";

export default function App(props) {
  return (
    // <Screen>
    //   <AppFormPicker />
    // </Screen>
    <ListingEditScreen />
  );
}
