
import vehicleModel from '../models/vehicleModel.js'


const getAllVehicles = async (req,res)=>{
   
    try {
        
        const vehicles =await vehicleModel.find()
            res.send({"status":"success",vehicles})
    } catch (error) {
        res.send({"status":"failed",error})
    
    }
    
    }

    const addVehicles=async (req,res)=>{
        let numberOfWheel=req.body.numberOfWheel;
        let typeOfVehicles=req.body.typeOfVehicles;
    
    
    
        const doc =new vehicleModel({
            
                numberOfWheel:numberOfWheel,
                typeOfVehicles:typeOfVehicles
            
        })
        try {
            let vehicle =await doc.save()
            res.send({"status":"success","message":"vehicle added successfully"})
        } catch (error) {
            res.send({"status":"success","message":error.message})
    
        }
    }

    export {getAllVehicles,addVehicles}