const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require("dayjs");
const ClaimSchema = new Schema({
    employeeName: {
        type: String,
        required: true
    },
    claimType: {
        type: String,
        required: true
    },
    claimAmount: {
        type: String,
        required: true
    },
    approvalStatus: {
        type: String,
        // required: true
    },
    hasGST: {
        type: Boolean,
        // required: true
    },
    totalAmount: {
        type: String,
        // required: true
    },
    dateOfExpenditure: {
        type: Date,
        default: dayjs().format('YYY-MM-DD')
    },
    receipt: {
        type: String,
        // required: true
    },
    remarks: {
        type: String,
        // required: true
    }

});
module.exports = mongoose.model("Claim", ClaimSchema);