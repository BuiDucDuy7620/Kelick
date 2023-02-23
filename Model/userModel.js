const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    // _id: mongoose.ObjectId,
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    organizationName: {
        type: String,
        required: true,
    },
    organizationID: {
        type: String,
        required: true,
    },
    organizationCountryBasedIn: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("User", UserSchema);


 