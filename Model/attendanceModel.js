const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require("dayjs");
const AttendanceSchema = new Schema({
    employeeName: {
        type: String,
        required: true,
        default: ""
    },
    checkInLocation: {
        type: String,
        required: true,
    },
    checkOutLocation: {
        type: String,
        // required: true,
    },
    validity: {
        type: String,
        // required: true,
        default: ""
    },
    checkInDate: {
        type: String,
        required: true,
        default: dayjs().format("YYY-MM-DD")
    },
    checkInTime: {
        type: String,
        required: true,
        default: ""
    },
    checkOutDate: {
        type: String,
        // required: true,
        default: dayjs().format("YYY-MM-DD")
    },
    checkOutTime: {
        type: String,
        // required: true,
        default: ""
    }
    
})
module.exports = mongoose.model("Attendance", AttendanceSchema);