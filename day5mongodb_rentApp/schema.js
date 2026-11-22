import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema( {
     name:{
        type : String,
        required: true
     },
     email:{
         type : String,
         required : true

     }  ,
     isOwner: {
        type : Boolean,
        default : true
     }  
});