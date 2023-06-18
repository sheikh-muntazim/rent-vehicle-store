import vehicleModels from '../models/vehicleModel.js';
import userModel from '../models/userModel.js';



const registerVehicle =async(req,res)=>{
    
    const { firstName,lastName,numberOfWheel,typeOfVehicles,modelOfVehicles,startDate,endDate}=req.body

    if (firstName && lastName && numberOfWheel && typeOfVehicles && modelOfVehicles && startDate && endDate) {
       try {
           const vehicle=  await vehicleModels.findOne({'typeOfVehicles.models':modelOfVehicles}) 
           if (vehicle) {
               const doc = new userModel(req.body)
            try {
               await doc.save()

                await vehicleModels.findOneAndUpdate({'typeOfVehicles.models':modelOfVehicles},{$pull:{'typeOfVehicles.$.models':modelOfVehicles}})
                res.send({"status":"success","message":"vehicle registration successful"})
            } catch (error) {
                res.send({"status":"failed","message":error})

            }

      } else {
        
          console.log(vehicle,'result');
          res.send({"status":"failed","message":"vehicle is not availabe"})
      }
       } catch (error) {
        res.send({"status":"failed","message":error.message})

       }
    

    } else {
        res.send({"status":"failed","message":"all fields are required"})
        
    }

    
}

export default registerVehicle