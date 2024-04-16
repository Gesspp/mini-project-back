const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

async function main() {
    try {
        await mongoose.connect("");
        app.listen(3001);
    }
    catch(err) {
        return console.log(err);
    }
}

main()