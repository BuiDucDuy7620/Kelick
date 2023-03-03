const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PayrollListSchema = new Schema({
    payslip: {
        type: String,
        required: true,
        default: ""
    },
    name: {
        type: String,
        // required: true,
    }, nric: {
        type: String,
        // required: true,
        default: true
    },
    takeHomeSalary: {
        type: Number,
        // required: true,
        default: ""
    },
    grossSalaray: {
        type: Number,
        // required: true,
    },
    otherItem: {
        type: Number,
        // required: true,
    },
    shg: {
        type: Number,
        // required: true,
        default: ""
    },
    employeeCPF: {
        type: Number,
        // required: true,
    },
    employeerCPF: {
        type: Number,
        required: true,
        default: ""
    },
    totalCPF: {
        type: Number,
        // required: true,
    },
    SDL: {
        type: Number,
        // required: true,
        default: ""
    }


}
);
module.exports = mongoose.model("PayrollList", PayrollListSchema);