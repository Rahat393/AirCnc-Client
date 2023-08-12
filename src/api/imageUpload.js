export const getImageUrl = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const url =
    "https://api.imgbb.com/1/upload?=600&key=56254df64bb1258c8e5d55ac4f7da7dc";

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  return data.data.display_url;
};
