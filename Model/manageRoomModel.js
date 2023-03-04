const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const manageRoomSchema = new Schema({
    roomName: {
        type: String,
        required: true,
    },
    branchOutlet: {
        type: String,
        required: true,
    },
    uploadRoomImage: {
        type: String,
        required: true,
    },
    amenitiesSelection: {
        type: String,
        required: true

    }
})
module.exports = mongoose.model("manageRoom", manageRoomSchema);