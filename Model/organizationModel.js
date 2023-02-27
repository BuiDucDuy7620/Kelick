const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrganizationSchema = new Schema({
    organizationName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    business: {
        type: String,
        required: true
        // default: dayjs().format('YYYY-MM-DD'),
    },
    industry: {
        type: String,
        required: true
    },
    organizationId: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    businessRegistrantionNumber: {
        type: String,
        required: true
    },
    dateOfIncorporation: {
        type: Day,
        required: true,
        default: dayjs().format('YYYY-MM-DD'),

    },
    postalCode: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
        required: true
    },
    addressLine3: {
        type: String,
        required: true
    },
    departmentName: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model("Organization", OrganizationSchema);