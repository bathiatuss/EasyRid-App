import client from "../api/client";

const login = (email, password) => client.post("/auth", { email, password });

export default {
  login,
};
