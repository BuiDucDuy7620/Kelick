const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LeaveSchema = new Schema({
    employeeName: {
        type: String,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    leaveDate: {
        type: String,
        required: true
    },
    approvalStatus: {
        type: String,
        // required: true
    },
    halfDayAM: {
        type: Boolean,
        // required: true
    },
    halfDayPM: {
        type: Boolean,
        // required: true
    },
    totalAmount: {
        type: Boolean

        // required: true
    },
    remarks: {
        type: String,
        required: true
    },
    attacchProof: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model("Leave", LeaveSchema);