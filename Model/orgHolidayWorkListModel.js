const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs = require("dayjs");
const OrgHolidayWorkListSchema = new Schema({
    postalCode: {
        type: String,
        // required: true,
        default: ""
    },
    dateStart: {
        type: Date,
        required: true,
        default: dayjs().format('YYYY-MM-DD')
    },
    dateEnd: {
        type: Date,
        required: true,
        default: dayjs().format('YYYY-MM-DD')
    }
}
    // ,{timestamps:true}
);
module.exports = mongoose.model("OrgHolidayWorkList", OrgHolidayWorkListSchema);