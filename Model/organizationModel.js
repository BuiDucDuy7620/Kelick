const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require("dayjs");
const OrganizationSchema = new Schema({
    organizationName: {
        type: String,
        required: true
    },
    countryBased: {
        type: String,
        required: true
    },
    business: {
        type: String,
        default: ""        // default: dayjs().format('YYYY-MM-DD'),
    },
    industry: {
        type: String,
        // required: true
        default: ""
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
        // required: true
        default: ""
    },
    dateOfIncorporation: {
        type: Date,
        // default: "",
        default: dayjs().format('YYY-MM-DD'),
    },
    postalCode: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    addressLine1: {
        type: String,
        default: ""
    },
    addressLine2: {
        type: String,
        default: ""
    },
    addressLine3: {
        type: String,
        default: ""
    }

});
module.exports = mongoose.model("Organization", OrganizationSchema);