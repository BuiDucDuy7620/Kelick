const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs = require("dayjs");
const AppraisalPeriodSchema = new Schema({
    appraisalName: {
        type: String,
        required: true,
        default: ""

    },
    appraisalPeriodStartDate: {
        type: String,
        required: true,
        default: dayjs().format('YYYY-MM-DD')

    },
    appraisalPeriodEndDate: {
        type: String,
        required: true,
        default: dayjs().format('YYYY-MM-DD')

    },
    selectAppraisalTemplate: {
        type: String,
        required: true
    },
    endDateForEmployee: {
        type: Date,
        default: dayjs().format('YYYY-MM-DD')
    }
});
module.exports = mongoose.model("AppraisalPeriod", AppraisalPeriodSchema);