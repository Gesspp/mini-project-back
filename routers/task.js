const { Router } = require("express");
const { add, all, notDone, makeDone, clearTasks, deleteById } = require("../controllers/task");

const router = Router();

router.post("/", add);
router.get("/", all);
router.get("/notdone", notDone);
router.put("/", makeDone);
router.delete("/", clearTasks);
router.delete("/deletebyid", deleteById);

module.exports = router;