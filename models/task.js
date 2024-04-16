const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const task = new Schema({
    title : String,
    isDone : Boolean,
})

module.exports = mongoose.model("task", task);
