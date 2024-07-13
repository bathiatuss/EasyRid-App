import client from "./client";

const login = (email, password) => client.post("./auth", { email, password });

const register = (name, email, password) =>
  client.get("./auth", { name, email, password });

export default {
  login,
  register,
};
