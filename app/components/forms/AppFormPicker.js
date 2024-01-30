import { View, Text } from "react-native";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({ placeholder, onSelectItem, error }) {
  return (
    <>
      <AppPicker placeholder={placeholder} />
      <ErrorMessage error={error} />
    </>
  );
}
