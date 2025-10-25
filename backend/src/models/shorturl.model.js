import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    full_url:{
        type:String,
        required:true,
    },
    Short_url:{
        type:String,
        required:true,
        index:true,
        unique:true,
    },

});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

export default shortUrl;