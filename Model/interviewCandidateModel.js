const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require('dayjs')
const InterviewCandidateSchema = new Schema({
    appliedRole: {
        type: String,
        // required: true,
        default: ""
    },
    candidateName: {
        type: String,
        required: true,
    }, createdDate: {
        type: String,
        // required: true,
        default: dayjs().format('YYYY-MM-DD')
    }, yearsExperience: {
        type: Number,
        // required: true,
        default: ""
    }, monthExperience: {
        type: Number,
        // required: true,
        default: ""
    }, nationality: {
        type: String,
        // required: true,
        default: ""
    },
    expectedSalary: {
        type: String,
        // required: true,
        default: ""
    },
    phoneNumber: {
        type: String,
        // required: true,
        default: ""
    },
    email: {
        type: String,
        // required: true,
        default: ""
    },
    attachment: {
        type: String,
        // required: true,
        default: ""
    }
}
);
module.exports = mongoose.model("InterviewCandidate", InterviewCandidateSchema);