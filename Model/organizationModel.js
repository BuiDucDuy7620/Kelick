const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs = require("dayjs");
const OrganizationSchema = new Schema({
    // department_id: {
    //     type: mongoose.ObjectId,
    //     ref: "Department",
    //     required: true,
    // },

    organizationName: {
        type: String,
        required: true,
        default: ""

    },
    countryBased: {
        type: String,
        // required: true,

        default: ""

    },
    business: {
        type: String,
        default: ""
    },
    industry: {
        type: String,
        // required: true
        default: ""
    },
    organizationId: {
        type: String,
        // required: ,
         default: ""
},
    logo: {
    type: String,
    // required: true,
    default: ""
},
    businessRegistrantionNumber: {
    type: String,
    // required: true
    default: ""
},
    dateOfIncorporation: {
    type: Date,
    // default: "",
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