const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PayrollPayItemSchema = new Schema({
    description: {
        type: String,
        required: true,
        default: ""
    },
    category: {
        type: String,
        required: true,
    },
    CPFType: {
        type: String,
        required: true,
    },
    IRBACode: {
        type: Number,
        required: true,
        default: ""
    },
    defaultAmount: {
        type: Number,
        // required: true,
    },
    tecurringPayItemSettings: {
        type: Boolean,
        // required: true,
        default: true
    },
    attendanceConditions: {
        type: Number,
        // required: true,
        default: ""
    },
    status: {
        type: Boolean,
        // required: true,
        default: true
    }
})
module.exports = mongoose.model("PayrollPayItem", PayrollPayItemSchema);