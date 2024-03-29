const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SolutionsSchema = new Schema({
    type:{
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
    
});
module.exports = mongoose.model("Solutions", SolutionsSchema);