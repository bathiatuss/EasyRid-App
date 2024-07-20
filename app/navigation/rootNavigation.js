import React from "react";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
  //question mark(?) added,
  //it check if navigation container rendered.
};

export default {
  navigate,
};
