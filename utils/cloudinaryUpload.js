export const uploadToCloudinary = async (file) => {
  // Apni .env file se Cloudinary ke credentials nikal rahe hain
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    console.error("Cloudinary credentials missing in .env file");
    return null;
  }

  // FormData prepare kar rahe hain Cloudinary ko bhejne ke liye
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", uploadPreset);

  try {
    // Cloudinary ke Unsigned Upload URL par POST request
    // 'auto/upload' use kiya hai taaki PDF aur Images dono smoothly upload ho jayein
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();

    if (result.error) {
      throw new Error(result.error.message);
    }
    
    // Upload success hone par Cloudinary ek secure URL return karta hai
    return result.secure_url; 
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};