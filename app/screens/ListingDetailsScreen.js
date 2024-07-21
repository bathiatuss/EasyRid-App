import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import listingApi from "../api/listings";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const validationSchema = Yup.object().shape({
    message: Yup.string().min(5).max(255).label("message"),
  });

  const handleSubmit = async ({ message }, { resetForm }) => {
    const result = await listingApi.postMessage(message, listing);
    if (!result.ok) alert("Message sending failed!"); //FIXME: throwing alert even if its OK!
    Keyboard.dismiss();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Congratulations",
        body: "Your message sent to seller",
      },
      trigger: null,
    });

    resetForm();
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={
          listing.images && listing.images.length > 0
            ? listing.images[0].url
            : null
        }
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem //FIXME: FIXED its not shown on screen
            image={require("../assets/atakan.jpg")}
            title="Atakan Baltacı"
            subTitle="5 Listings"
          />
        </View>
        <View>
          <AppForm
            initialValues={{ message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <AppFormField
              maxLength={255}
              name="message"
              placeholder="Message..."
            />
            <SubmitButton title="Contact Seller" />
          </AppForm>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
