const mongoose = require("mongoose");

mongoose.set("strictQuery",false)

const connectToMongo=(uri)=>{
    mongoose.connect(uri)
        .then(console.log("connected to mongo succesfully"))
    }

module.exports= connectToMongo;

