const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DepartmentSchema = new Schema({
    name: {
        type: String,
        required:true
        // default:new Date()
    },
    description: {
        type: String,
        required:true
    }
    
});
module.exports = mongoose.model("Department", DepartmentSchema);