const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InterviewRole2Schema = new Schema({
    questionType: {
        type: String,
        // required: true,
        default: ""
    },
    questionContent: {
        type: String,
        // required: true,
        default: ""
    }
}
);
module.exports = mongoose.model("InterviewRole2", InterviewRole2Schema);