import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/shorturl.model.js";
import router from "./src/routes/shorturl.route.js";
import short_url from "./src/routes/shorturl.route.js";
import cors from "cors";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";


dotenv.config();connectDB();
//dotenv.config({ path: "./.env" });
console.log("Loaded APP_URL:", process.env.APP_URL);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/create",short_url);

// app.get("/",(req,res)=>{res.send("URL SHORTENER")});

app.get("/:id",redirectFromShortUrl);
    

// app.listen(5000,()=>{
//     
//     //console.log(process.env.MONGO_URI)
//     console.log("server is running on port 500");
    
// })
export default app;