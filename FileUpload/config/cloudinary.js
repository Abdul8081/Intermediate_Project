//import cloudinary
const cloudinary = require("cloudinary").v2;

require("dotenv").config();

exports.cloudinaryConnect = () => {
    try{
            cloudinary.config({
                //this is the syntax, we have to pass these three things always
                cloud_name:process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET,
            })
    }
    catch(error) {
        console.log(error);
    }
}