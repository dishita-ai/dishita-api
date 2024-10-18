const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
 
    
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],

    },
    featured:{
        type:Boolean,
        default:false,

    },
    rating:{
        type:Number,
        default:4.9

    },
    createdate:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["Fashion Co.","AudioTech","TechGadgets","Elite Bags","FitLife","GamerPro","SoundWave", "Classic Goods", "FitGear","PhoneCorp","HomeEssentials","Fashion Hub","BrewMaster","Adventure Gear","Timeless","TechGear","CleanAir","BBQ Master","SkyTech","DisplayTech"],
            message:`{VALUE} is not supported`,
        },
    },
    colors: {
        type: Array,
        items: {
          type: String
        }
      },
      image: {
        type: String,
        "format": "uri"
      },
      description: {
        type: String
      },
      category: {
        type: String
      },
      
      shipping: {
        type: String
      }
   
    
});
module.exports=mongoose.model("Product",productSchema)