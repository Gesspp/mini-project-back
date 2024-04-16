const Task = require("../models/task");

const add = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({error : "no data"});
    }
    console.log("no data")

    const {title} = req.body;
    const task = new Task({title, isDone : false});
    await task.save();
    return res.status(201).json("задача создана");
}

module.exports = {
    add
}