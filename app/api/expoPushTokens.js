import client from "./client";

const register = (pushTokens) => {
  client.post("/expoPushTokens", { token: pushTokens });
};

export default {
  register,
};
