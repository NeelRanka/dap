var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
// mongoose.model('delivery_boi', delivery_boiSchema);

module.exports = mongoose.model('Delivery_bois', delivery_boiSchema);