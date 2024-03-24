import mongoose from "mongoose";

const {Schema}  = mongoose

const userSchema  = new Schema({
    

    username :{
        type:String, 
        required:true,
        unique:true
    },
    phone:{
        type:String, 
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export const userModel =  mongoose.model('User',userSchema)

/*
createdAt , updatedAt
sql   
create table table name 
userId int not null primary  
usernmae varchar(100)  not null
*/

