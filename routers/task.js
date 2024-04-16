const { Router } = require("express");
const { add } = require("../controllers/task");

const router = Router();

router.post("/", add);

module.exports = router;