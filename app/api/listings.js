import apiClient from "./client";

const endpoint = "/listings";

const getListings = (a, b, c) => apiClient.get(endpoint);

const postListings = (listing, onUploadProgress) => {
  const data = new FormData();

  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  console.log("Posted Data:", data);

  return apiClient.post(endpoint, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progress) => {
      if (onUploadProgress) {
        onUploadProgress(progress.loaded / progress.total);
      }
    },
  });
};

export default {
  getListings,
  postListings,
};
