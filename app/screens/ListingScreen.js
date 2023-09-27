import React from "react";
import { View, StyleSheet } from "react-native-web";
import Screen from "../components/Screen";
import Card from "../components/Card";

function ListingScreen(props) {
  return (
    <Screen>
      <Card
        title={"Red jacket for sale"}
        subTitle={"$100"}
        image={require("../assets/jacket.jpg")}
      />
      <Card
        title={"Couch in great condition"}
        subTitle={"$1000"}
        image={require("../assets/couch.jpg")}
      />
    </Screen>
  );
}

export default ListingScreen;
