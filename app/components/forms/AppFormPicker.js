import { View, Text } from "react-native";
import React from "react";
import { Formik, useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  numColumns,
  containerWidth,
  placeholder,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        numColumns={numColumns}
        containerWidth={containerWidth}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
