const mongoose = require("mongoose");

//mogngo db url k liye , environment file se data lene k liye
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB Connection Successful"))
    .catch(  (error) => {
        console.log("DB Connection Issues");
        console.error(error);
        process.exit(1);
    } );
};