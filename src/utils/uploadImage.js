export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "my_abc"); // Сиз түзгөн пресет

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dby9nqbgb/image/upload`, // Сиздин Cloud Name
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) throw new Error("Cloudinary жүктөө катасы");

    const data = await response.json();
    return data.secure_url; // Сүрөттүн даяр шилтемесин берет
  } catch (err) {
    console.error("Сүрөт жүктөөдө ката:", err);
    return null;
  }
};
