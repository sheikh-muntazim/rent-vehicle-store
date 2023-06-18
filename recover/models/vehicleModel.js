import mongoose from 'mongoose';



const vehicleSchema=mongoose.Schema({
   
            numberOfWheel:Number,
            typeOfVehicles:
                [{
                    vehicleType:{type:String,trim:true},
                    models:Array
                }]
                
        
    
})

const vehicleModel=mongoose.model('vehicle',vehicleSchema)

export default vehicleModel