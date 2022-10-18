const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    image: {
        type: String,
        required: true,
    },
    balance: {
        type: String,
    },
    skillCategory: {
        type: String,
        default: false,
    },
    skill: {
        type: String,
        required: true,
    },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
