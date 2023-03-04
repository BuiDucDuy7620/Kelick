const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs = require("dayjs");
const RoomBookingSchema = new Schema({
    bookingDate: {
        type: Date,
        required: true,
        default: dayjs().format("YYY-MM-DD")
    },
    branchOutlet: {
        type: String,
        required: true,
    },
    bookingTime: {
        type: String,
        required: true,
    },
    employeeBooked: {
        type: String,
        required: true,
        default: ""
    }
})
module.exports = mongoose.model("RoomBooking", RoomBookingSchema);