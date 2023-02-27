const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require("dayjs");

const NotificationSchema = new Schema({
    // _id: mongoose.ObjectId,
    user: {
        type: mongoose.ObjectId,
        ref: "User",
        required: true,
    },
    notificationType: {
        type:String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: 0, //0: chưa xem, 1:đã xem
    },
    date: {
        type: Date,
        default: dayjs().format('YYYY-MM-DD'),
        // default:new Date()
    },
});

module.exports = mongoose.model("Notification", NotificationSchema);
