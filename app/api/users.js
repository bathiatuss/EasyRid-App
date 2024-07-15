import client from "../api/client";

const register = (userInfo) => {
  return client.post("/users", userInfo);
};

export default { register };
