import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "", //it must be string
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLenght={255} name="title" placeholder="Title" />
        <AppFormField
          keyBoardType="numeric"
          maxLenght={8} //100000.99
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          maxLenght={255}
          multiline
          name="description"
          numberOfLine={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
