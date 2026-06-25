import chalk from 'chalk';
import {v2 as cloudinary, v2} from 'cloudinary'
import fs from 'fs' ;

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME ,
    api_key : process.env.CLOUDINARY_API_KEY ,
    api_secret : process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null ;

        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto"
        });

        console.log(chalk.bold.green(`File Successfully Uploaded On Cloudinary : ${response.url} `))

    } catch (e) {
        console.log(chalk.bold.red(e.message));
        fs.unlinkSync(localFilePath);
        return null ;
    }
}

export {uploadOnCloudinary};