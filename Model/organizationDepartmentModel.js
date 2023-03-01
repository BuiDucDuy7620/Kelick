const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const organizationDepartmentSchema = new Schema({
    organization_id: {
        type: mongoose.ObjectId,
        ref: "Organization",
        required: true,
    },
    department_id: {
        type: mongoose.ObjectId,
        ref: "Department",
        required: true,
    },
    
});
module.exports = mongoose.model("organizationDepartment", organizationDepartmentSchema);