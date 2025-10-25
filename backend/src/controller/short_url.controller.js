import { createShortUrlService } from "../services/short_url.service.js";
import urlSchema from "../models/shorturl.model.js"

console.log(process.env.APP_URL);
export const createShortUrl = async (req,res) =>{
    const {url} = req.body;
    const shortUrl = await createShortUrlService(url);
    
    
    res.send(process.env.APP_URL+shortUrl);
   
};

export const redirectFromShortUrl = async(req,res)=>{
    try{
        const {id} = req.params;
        const url = await urlSchema.findOne({Short_url:id});
        console.log("888888888888888888888888")
       console.log(url);
        if(url){
           //res.redirect(url.full_url);
               res.writeHead(307, { Location: url.full_url });
               res.end();
        }else{
            res.status(404).send("not found");
        }

    }catch(err){
        console.log(err);
    }
}
