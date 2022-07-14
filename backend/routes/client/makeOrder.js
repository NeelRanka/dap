// const express = require('express');
// var router = express.Router();
// const bodyParser = require("body-parser");
// router.use(bodyParser.json())
// router.use(express.json())
// const {client} = require("../../db")
// const {requireAuth} =  require("../../middleware/jwtAuth");
// const { route } = require('../auth/signup');
// const utility = require("./../utility")

// router.get("/dlDetails", requireAuth, async(req,resp) => {
//     resp.send({"msg":"in dl details entering part GET"})
// })

// router.post("/dlDetails", requireAuth, async(req,resp) => {
//     resp.send({"msg":"in details entering part POST"})
// })




// router.get("/vehicleDetails", requireAuth, async(req,resp) => {
//     resp.send({"msg":"in vehicle details entering route GET"})
// })

// router.post("/vehicleDetails", requireAuth, async(req,resp) => {
//     console.log(resp.locals.decodedToken.id)
//     let [vehicleInfo,allPresent] = utility.checkParam(req.body,["Registration_Number","Vehicle Type","MaxParcelWeight"])
    
//     if(!allPresent){
//         resp.send({"msg":"missing parameters in vehicle registration"})
//     }
//     vehicleInfo["OwnerId"] = resp.locals.decodedToken.id
//     console.log("Before")
//     let OK = await AddVehicleDetails(vehicleInfo)
//     console.log("After",typeof(OK))
//     if(OK){
//         resp.send({"msg":"Vehicle data successfully added to Database"})
//     }else{
//         resp.send({"msg":"Some error while adding vehicle data to Database"})
//     }
// })


// async function AddVehicleDetails(vehicleInfo){
//     OK = false
//     try{
//         console.log("adding vehicle details")
//         let  [OwnerId,Registration_Number,VehicleType,MaxPArcelWeight] = [vehicleInfo.OwnerId,vehicleInfo.Registration_Number,vehicleInfo["Vehicle Type"],vehicleInfo.MaxParcelWeight]
//         query = `INSERT INTO dap.vehicle (ownerid,registration_number,"Vehicle Type",maxparcelweight) VALUES (${OwnerId},'${Registration_Number}','${VehicleType}',${MaxPArcelWeight});`
//         console.log("Query is ",query)

//         let res = await client.query(query)
//         console.log("result " ,res)
//         OK = true
//     }catch(err){
//         console.log("error while adding vehicle info to Database",err)
//     }
//     return(OK)
// }


// module.exports = router;