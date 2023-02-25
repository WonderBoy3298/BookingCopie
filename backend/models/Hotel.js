const mongoose = require("mongoose")


const HotelSchema = new mongoose.Schema({

    name:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    adress:{
        type:String,
        required:false
    },
    distance:{
        type:String,
        required:false
    },
    photos:{
        type:[String],
        required:false
    },
    desc:{
        type:String,
        required:false
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        required:false
    },
    rooms:{
        type:[String],
        required:false
    },
     cheapestPrice:{
        type:Number,
        required:false
     },
     featured:{
        type:Boolean,
        default:false,
        required:false
    },

});

module.exports =  mongoose.model("Hotel",HotelSchema)