const Task = require("../models/task");

const add = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({error : "no data"});
    }

    const {title} = req.body;
    const task = new Task({title, isDone : false});
    await task.save();
    return res.status(201).json({"message" : "задача создана"});
}

const all = async(req, res) => {
    const tasks = await Task.find();
    return res.status(200).json({tasks});
}

const notDone = async(req, res) => {
    const tasks = await Task.find({isDone : false});
    return res.status(200).json({tasks});
}

const makeDone = async(req, res) => {
    if (!req.body) {
        return res.status(400).json({error : "no data"});
    }
    const {id} = req.body;
    const task = await Task.findById(id);
    task.isDone = true;
    await task.save();

    return res.status(200).json({"message" : "задача выполнена"});
    
}

const clearTasks = async(req, res) => {
    await Task.deleteMany({isDone : true});
    
    return res.status(200).json({"message" : "задачи успешно удалены"});
}

const deleteById = async(req, res) => {
    const {id} = req.body;

    const task = await Task.findById(id);
    await Task.deleteOne(task);

    return res.status(200).json({"message" : "задача успешно удалена"});
}

module.exports = {
    add,
    all,
    notDone,
    makeDone,
    clearTasks,
    deleteById
}