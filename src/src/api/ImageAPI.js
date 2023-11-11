import instance from "@/api/instance.js";

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  return await instance({
    url: "/uploadImg",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  });
};

export default { uploadImage };
