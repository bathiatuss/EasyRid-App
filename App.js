import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText/AppText";
import Card from "./app/components/Card";

function App(props) {
  return (
    <Card
      title={"Red Jacket for sale!"}
      subTitle={"$100"}
      image={require("..\\app\\assets\\jacket.jpg")}
    />
  );
}

export default App;
