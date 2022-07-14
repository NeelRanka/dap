var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
// mongoose.model('vehicle', vehicleSchema);

module.exports = mongoose.model('Vehicle', vehicleSchema);