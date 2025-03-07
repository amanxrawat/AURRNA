import { v2 as cloudinary } from 'cloudinary'
import dotenv from "dotenv";



dotenv.config();



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
    secure: true,
  });


  const uploadImagesToCloudinary = async (files) => {
    const uploadPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(

          { folder: "products" }, 
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        uploadStream.end(file.buffer); 
      });
    });
  
    return await Promise.all(uploadPromises);
  };
  
  const deleteImagesFromCloudinary = async (imageUrls) => {
    try {
      const deletePromises = imageUrls.map(async (imageUrl) => {
        // Extract public ID from image URL
        const publicId = imageUrl.split("/").pop().split(".")[0]; 
        await cloudinary.v2.uploader.destroy(publicId);
      });
  
      await Promise.all(deletePromises);
    } catch (error) {
      console.error("Error deleting images from Cloudinary:", error);
    }
  };



  


  export {uploadImagesToCloudinary , deleteImagesFromCloudinary}