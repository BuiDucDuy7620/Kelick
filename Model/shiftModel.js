const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShiftSchema = new Schema({
    shiftType: {
        type: String,
        required: true,
        default: ""
    },
    outletBranch: {
        type: String,
        required: true,
    },
    timeIn: {
        type: String,
        // required: true,
        default: ""
    },
    timeOut: {
        type: String,
        // required: true,
        default: ""
    }
    
})
module.exports = mongoose.model("Shift", ShiftSchema);