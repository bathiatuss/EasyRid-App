import client from "./client";

const listingsEndpoint = "/listings";

const getListings = () => client.get(listingsEndpoint);

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

  return client.post(listingsEndpoint, data, {
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
