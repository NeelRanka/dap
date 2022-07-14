var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
// mongoose.model('company', companySchema);

module.exports = mongoose.model('Company', companySchema);