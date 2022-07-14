const mongoose = require('mongoose');
let db = undefined
async function initDB() {
    await mongoose.connect('mongodb+srv://NeelRanka:MongoPassword@cluster0.gqxm3.mongodb.net/dap?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
    if (!err) {
    console.log('Successfully Established Connection with MongoDB')
    db = mongoose.connection
    console.log("before here",db)
    module.exports = {db} 
    console.log("here ",db,mongoose.connection.db)
    // mongoose.connection.db.listCollections().toArray(function(err, names){
    //     console.log(names)
    // })
    console.log("Exported DB connection")
    }
    else {
    console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
    });
}; 
 
(async () => {
    await initDB();
    console.log("db initiated");
  })();

//Connecting Node and MongoDB
// require('./course.model');



// const mongoose = require('mongoose');
 
//Attributes of the Course object
var courseSchema = new mongoose.Schema({
courseName: {
type: String,
required: 'This field is required!'
},
courseId: {
type: String
},
courseDuration: {
type: String
},
courseFee: {
type: String
}
});


var delivery_boiSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required!'
        },
    dl_id:{
        type: String,
        },
    phone:{
        type: String,
        required: 'This field is required!'
        },
    address:{
        type: String,
        required: 'This field is required!'
        },
    email:{
        type: String,
        required: 'This field is required!'
        },
    password_hash:{
        type: String,
        required: 'This field is required!'
        }
})
mongoose.model('delivery_boi', delivery_boiSchema);

console.log("Model successfully created",mongoose.model("delivery_boi"))



var vehicleSchema = new mongoose.Schema({
    registration_number:{
        type: String,
        required: 'This field is required!'
        },
    ownerid:{
        type: mongoose.Schema.Types.ObjectId,
        required: 'This field is required!'
        },
    vehicle_type:{
        type: String,
        required: 'This field is required!'
        },
    maxParcelWeight:{
        type: Number,
        required: 'This field is required!'
        }
})
mongoose.model('vehicle', vehicleSchema);



var companySchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required!'
        },
    phone:{
        type: String,
        required: 'This field is required!'
        },
    address:{
        type: String,
        required: 'This field is required!'
        },
    email:{
        type: String,
        required: 'This field is required!'
        },
    password_hash:{
        type: String,
        required: 'This field is required!'
        }
})
mongoose.model('company', companySchema);



var openContractSchema = new mongoose.Schema({
    name:{
        type: String,
        required: 'This field is required!'
        },
    dl_id:{
        type: String,
        },
    phone:{
        type: String,
        required: 'This field is required!'
        },
    address:{
        type: String,
        required: 'This field is required!'
        },
    email:{
        type: String,
        required: 'This field is required!'
        },
    password_hash:{
        type: String,
        required: 'This field is required!'
        }
})
mongoose.model('opencontract', openContractSchema);



// ######################################################################################
// const boi = mongoose.model("delivery_boi")
// var newBoi = new boi();
// newBoi.name = "Neel"
// newBoi.email = "nvrank1@gmail.com"
// newBoi.password_hash = "noPassword"
// newBoi.address = "addr l1 l2"
// newBoi.phone = "9552583747"

// console.log("before saving")
// async function insert(){
//     await new Promise(r => setTimeout(r, 2000));
//     try{
//         await newBoi.save((err, doc) => {
//             if (!err)
//             console.log("inserted")
//             else
//             console.log('Error during record insertion : ' + err);
//             });
//     }catch(err){
//         console.log("Some error occured,",err)
//     }
// }
// console.log("before insert");

// (async () => {
//     await insert();
//     console.log("inserted");
// })();

//   console.log("after insert")

