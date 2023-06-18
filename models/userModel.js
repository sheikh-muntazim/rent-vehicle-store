import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    numberOfWheels:Number,
    typeOfVehicles:String,
    modelOfVehicles:String,
    startDate:Date,
    endDate:Date
});

const userModel=mongoose.model('user',userSchema)
export default userModel
