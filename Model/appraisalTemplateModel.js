const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require("dayjs");
const AppraisalTemplateSchema = new Schema({
    templateName: {
        type: String,
        // required: true,
        default:""

    },
    description: {
        type: String,
        // required: true,
        default:""

    },
    numberOfReviewers: {
        type: String,
        // required: true,
        default:""

    },
    employeesIncluded: {
        type: Date,
        default:dayjs().format('YYYY-MM-DD')
    },
createdDate    : {
        type: Date,
        default:dayjs().format('YYYY-MM-DD')
    }
});
module.exports = mongoose.model("AppraisalTemplate", AppraisalTemplateSchema);