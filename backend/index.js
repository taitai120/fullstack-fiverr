const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;
const ENV = process.env.NODE_ENV;
const DB = process.env.DATABASE;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server is running in ${ENV} mode on port ${PORT}...`);
});
