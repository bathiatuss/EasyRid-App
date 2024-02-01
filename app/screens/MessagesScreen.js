import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris quis libero consequat consectetur. Quisque at ex ac mauris congue bibendum. Integer ut nisi ut lectus rutrum varius. Fusce pulvinar turpis id lacinia commodo. Nam ac libero eget sem sodales ultricies. Nullam eget est eu elit hendrerit tincidunt sit amet vitae ipsum. Maecenas quis arcu at leo varius aliquet. Nulla facilisi. Proin ac risus eget ex vehicula gravida.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris quis libero consequat consectetur. Quisque at ex ac mauris congue bibendum. Integer ut nisi ut lectus rutrum varius. Fusce pulvinar turpis id lacinia commodo. Nam ac libero eget sem sodales ultricies. Nullam eget est eu elit hendrerit tincidunt sit amet vitae ipsum. Maecenas quis arcu at leo varius aliquet. Nulla facilisi. Proin ac risus eget ex vehicula gravida.",
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

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //delete this message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            titleLines={2}
            subTitle={item.description}
            subTitleLines={5}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            showChevrons={true}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          //that an example. its not functional.
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
