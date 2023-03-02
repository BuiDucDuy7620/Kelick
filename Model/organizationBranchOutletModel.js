const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrganizationBranchOutletSchema = new Schema({

    name: {
        type: String,
        required: true,
        // default: ""
    },
    country: {
        type: String,
        required: true,
        // default: ""
    },
    postalCode: {
        type: String,
        // required: true,
        default: ""
    },
    address: {
        type: String,
        // required: true,
        default: ""
    },
    officeNo: {
        type: String,
        // required: true,
        default: ""
    },
    noOfEmployees: {
        type: String,
        // required: true,
        default: ""
    },
    status: {
        type: Boolean,
        required: true
        // default:false
    },
    checkinRadius:{
        type:Number,
        required:true
    }


});
module.exports = mongoose.model("OrganizationBranchOutlet", OrganizationBranchOutletSchema);