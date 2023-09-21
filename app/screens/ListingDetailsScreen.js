import React from "react";
import Card from "../components/Card";

function ListingDetailsScreen(props) {
  return (
    <Card
      title={"Red Jacket for sale!"}
      subTitle={"$100"}
      image={require("..\\app\\assets\\jacket.jpg")}
    />
  );
}

export default ListingDetailsScreen;
