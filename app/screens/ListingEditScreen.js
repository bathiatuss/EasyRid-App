import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Games", value: 4, icon: "cards", backgroundColor: "#26de81" },
  {
    label: "Clothing",
    value: 5,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  { label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
  {
    label: "Movies & Music",
    value: 7,
    icon: "headphones",
    backgroundColor: "#4b7bec",
  },
  {
    label: "Books",
    value: 8,
    icon: "book-open-blank-variant",
    backgroundColor: "#884ab4",
  },
  {
    label: "Other",
    value: 9,
    icon: "page-layout-header",
    backgroundColor: "#5e6f81",
  },
];

export default function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "", //it must be string!
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => {
          //TODO: The values parameter represents the values of the form fields
          console.log("Form Values:", values);
          console.log("Location:", location);
        }}
        validationSchema={validationSchema}
      >
        <FormImagePicker
          name="images"
          //FIXME: FIXED image not shown on screen and can't delete!
        />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          containerWidth="30%"
          keyboardType="numeric"
          maxLength={8} //TODO: max 9999.99 increase the value later
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          numColumns={3}
          containerWidth="55%"
          items={categories}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={2}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
