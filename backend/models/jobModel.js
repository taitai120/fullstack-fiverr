const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    maintitle: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    category2: {
        type: String,
        required: true,
    },
    days: {
        type: String,
        default: false,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
