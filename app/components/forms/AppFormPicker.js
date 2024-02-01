import { View, Text } from "react-native";
import React from "react";
import { Formik, useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} />
    </>
  );
}
