const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require("dayjs");
const AppraisalSummarySchema = new Schema({
    appraisal: {
        type: String,
        // required: true,
        default:""

    },
    employee: {
        type: String,
        // required: true,
        default:""

    },
    templateName: {
        type: String,
        // required: true,
        default:""

    },
    appraisalStartDate: {
        type: Date,
        default:dayjs().format('YYYY-MM-DD')
    },
    employeeEndDate: {
        type: Date,
        default:dayjs().format('YYYY-MM-DD')
    },
    appraisalEndDate: {
        type: Date,
        default:dayjs().format('YYYY-MM-DD')
    },
    appraisalStatus: {
        type: String,
        // required: true,
        default:""

    },
    reviewer: {
        type: String,
        default:""

        // required: true
    }

});
module.exports = mongoose.model("AppraisalSummary", AppraisalSummarySchema);