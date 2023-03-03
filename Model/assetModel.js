const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AssetSchema = new Schema({
    assetName: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        // required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    assignedTo: {
        type: String,
        // required: true,
        default: ""
    }
})
module.exports = mongoose.model("Asset", AssetSchema);