const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InterviewHiringSchema = new Schema({
    processName: {
        type: String,
        required: true,
        default: ""
    },
    hiringStatus: {
        type: String,
        // required: true,
    }, defaultProcess: {
        type: Boolean,
        // required: true,
        default: true
    }
}
);
module.exports = mongoose.model("InterviewHiring", InterviewHiringSchema);