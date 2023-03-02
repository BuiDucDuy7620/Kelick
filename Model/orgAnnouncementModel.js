const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dayjs=require("dayjs");
const orgAnnouncementSchema = new Schema({
    title: {
        type: String,
        required: true,
        // default: ""
    },
    content: {
        type: String,
        required: true,
        // default: ""
    },
    branchOutlet: {
        type: String,
        required: true,
        // default: ""
    },
    publishDate: {
        type: Date,
        required:true,
        default: dayjs().format('YYYY-MM-DD'),        
        // default: ""
    },
    department: {
        type: String,
        required: true,
        // default: ""
    },
    publishStatus: {
        type: Boolean,
        required: true,
        // default: ""
    }

});
module.exports = mongoose.model("orgAnnouncement", orgAnnouncementSchema);