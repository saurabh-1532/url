import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js"


export const createShortUrlService = async(url)=>{
    const shortUrl = await generateNanoId(7);
    
    const newUrl = new urlSchema({
        full_url : url,
        Short_url: shortUrl
    })

    newUrl.save();
    return shortUrl;
}