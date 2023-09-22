import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <FlatList
      data={messages}
      keyExtractor={(messages) => messages.id.toString()}
    />
  );
}

const styles = StyleSheet.create({});
