import { View, Keyboard, Alert } from "react-native";
import React from "react";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import messagesApi from "../api/messages";
import { AppForm, AppFormField, SubmitButton } from "./forms";

function ContactSellerForm({ listing }) {
  const validationSchema = Yup.object().shape({
    message: Yup.string().min(1).label("message"),
  });

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert(
        "Oops",
        "Something went wrong while sending your message!"
      ); //FIXME: FIXED throwing alert even if its OK! (messages.js created)
    }

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
    <View>
      <AppForm
        initialValues={{ message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <AppFormField
          maxLength={255}
          multiline
          name="message"
          numberOfLines={3}
          placeholder="Message..."
        />
        <SubmitButton title="Contact Seller" />
      </AppForm>
    </View>
  );
}

export default ContactSellerForm;
