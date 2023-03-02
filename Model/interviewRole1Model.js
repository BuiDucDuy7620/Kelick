const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const InterviewRole1Schema = new Schema({
    roleTitle: {
        type: String,
        // required: true,
        default: ""
    },
    city: {
        type: String,
        // required: true,
        default: ""
    }, experience: {
        type: String,
        // required: true,
        default: ""
    }, department: {
        type: String,
        // required: true,
        default: ""
    }, roleType: {
        type: String,
        // required: true,
        default: ""
    }, salaryRange: {
        type: String,
        // required: true,
        default: ""
    },
    baseIn: {
        type: String,
        // required: true,
        default: ""
    },
    employeeWorkingHours: {
        type: String,
        // required: true,
        default: ""
    },
    roleStatus: {
        type: Boolean,
        // required: true,
        default: ""
    },
    jobDescription: {
        type: String,
        // required: true,
        default: ""
    },
    recruitmentEmail: {
        type: String,
        // required: true,
        default: ""
    },
    workplaceType: {
        type: String,
        // required: true,
        default: ""
    }
}
);
module.exports = mongoose.model("InterviewRole1", InterviewRole1Schema);