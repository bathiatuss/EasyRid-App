import React from "react";
import { TextInput } from "react-native";

import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AppText from "./app/components/AppText/AppText";
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

function App(props) {
  return (
    <Screen>
      <AppTextInput placeholder={"Username"} icon={"email"} />
    </Screen>
  );
}

export default App;
