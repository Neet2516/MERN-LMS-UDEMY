import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    description:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String ,
        enum:["student","educator"],
        required:true 

    },
    password:{
        type:String, 
        required :true ,
        select:false
    },
    photoUrl :{
        type:String ,
        default:""
    },
    enrolledCourses:[{
        type:mongoose.Schema.Types.ObjectID ,
        ref:"Course"
    }]
},{timestamps:true})

const User =  mongoose.model ("User",userSchema)


export default  User ;