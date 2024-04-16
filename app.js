const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

async function main() {
    try {
        await mongoose.connect("mongodb://http://127.0.0.1:27017/task");
        app.listen(3001);
    }
    catch(err) {
        return console.log(err);
    }
}

main()