import apiClient from "./client";

const endpoint = "/listings";

const getListings = (a, b, c) => apiClient.get(endpoint);

export default {
  getListings,
};
