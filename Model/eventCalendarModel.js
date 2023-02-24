const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EventCalendarSchema = new Schema({
    dateStart: {
        type: Date,
        required:true
        // default:new Date()
    },
    dateEnd: {
        type: Date,
        required:true
    },
    content: {
        type: String,
        required: true
        // default: dayjs().format('YYYY-MM-DD'),

    }
    
});
module.exports = mongoose.model("EventCalendar", EventCalendarSchema);