const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks_controller");
const verifyToken = require("../config/middlware");
//create task
router.post("/create", verifyToken, tasksController.create);
// delete task
router.delete("/destroy/:id", verifyToken, tasksController.destroy);
//edit task
router.put("/edit/:id", verifyToken, tasksController.edit);
//get all the tasks created by different users
router.get("/", tasksController.getAllTasks);

// search task
router.get("/search/:key", verifyToken, tasksController.searchTask);
module.exports = router;
