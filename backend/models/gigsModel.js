const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    categoryone: {
        type: String,
        required: true,
    },
    categorytwo: {
        type: String,
        required: true,
    },
    servicetype: {
        type: String,
        default: false,
    },
    matadata: {
        type: Number,
        required: true,
    },
    searchtag: [{ type: String, required: true }],
    pkgname: [
        {
            type: String,
            required: true,
        },
    ],
    pkgdiscription: [
        {
            discription: {
                type: String,
                required: true,
            },
        },
    ],
    deliverytime: [
        {
            days: {
                type: String,
                required: true,
            },
        },
    ],
    numofpages: [
        {
            pagesnum: {
                type: String,
                required: true,
            },
        },
    ],
    numofproducts: [
        {
            productsnum: {
                type: String,
                required: true,
            },
        },
    ],
    costomization: [
        {
            name: {
                type: Boolean,
                required: true,
            },
        },
    ],
    responsivedesign: [
        {
            name: {
                type: Boolean,
                required: true,
            },
        },
    ],
    contentupload: [
        {
            name: {
                type: Boolean,
                required: true,
            },
        },
    ],
    revisions: [
        {
            name: {
                type: String,
                required: true,
            },
        },
    ],
    price: [
        {
            name: {
                type: Number,
                required: true,
            },
        },
    ],
    image: {
        type: String,
        required: true,
    },
});

const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;
