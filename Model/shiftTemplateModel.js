const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShiftTemplateSchema = new Schema({
    shiftTemplateName: {
        type: String,
        required: true,
        default: ""
    },
    shiftType: {
        type: String,
        required: true,
    },
    noOfDay: {
        type: String,
        // required: true,
        default: ""
    },
    ouletBranch: {
        type: String,
        required: true,
        default: ""
    },
    timeIn: {
        type: String,
        // required: true,
        default: ""
    }
    ,
    timeOut: {
        type: String,
        // required: true,
        default: ""
    }
})
module.exports = mongoose.model("ShiftTemplate", ShiftTemplateSchema);