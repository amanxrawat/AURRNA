import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import { fileURLToPath } from 'url';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
  });


  const uploadOnCloudinary = async (localFilePath) =>{
    /**
     * Uploads a file to Cloudinary.
     * 
     * @param {string} localFilePath - The local file path to upload.
     * @returns {Object|null} The response object from Cloudinary if successful, otherwise null.
    */

    try{
        if(!localFilePath){
            return null
        }

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        fs.unlinkSync(localFilePath);
        console.log("response from the cloudinary",response);
        // console.log(response.url)
        return response

    }catch(error){
        fs.unlinkSync(localFilePath) //remove the file from the local server
        console.log("cloudinary upload failed : || ", error);
        return null;
    }
  }

  const extractPublicId = (url) => {
    const parts = url.split('/');
    const versionAndPublicId = parts.slice(parts.indexOf('upload') + 1); // get version + public_id + extension
    const publicIdWithExtension = versionAndPublicId.slice(1).join('/'); // Ignore the version (index 0) and get public_id + extension
    const publicId = publicIdWithExtension.split('.')[0]; // Remove file extension (.jpg, .png, etc.)
    
    return publicId;
  };
  
  const deleteFromCloudinary = async (imageUrl) => {
    const publicId = extractPublicId(imageUrl);
    
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      console.log('Delete Result:', result);
      return result;
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    }
  };


  export {uploadOnCloudinary, deleteFromCloudinary}