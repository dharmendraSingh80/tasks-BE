const Task = require("../models/task");
// get all the tasks
module.exports.getAllTasks = async function (req, res) {
  try {
    let tasks = await Task.find({});
    return res.json(200, {
      tasks: tasks,
    });
  } catch (error) {
    return res.json(500, {
      message: error,
    });
  }
};

//create new task
module.exports.create = async function (req, res) {
  try {
    let task = await Task.create({
      ...req.body,
      user: req.userId,
    });
    return res.json(200, {
      Message: "Task is created successfully !!",
      task: task,
    });
  } catch (error) {
    return res.json(500, {
      message: error,
    });
  }
};

// delete task by taskId
module.exports.destroy = async function (req, res) {
  try {
    let task = await Task.findById(req.params.id);
    if (task.user == req.userId) {
      task.deleteOne();
      return res.json(200, {
        Message: "Task is deleted successfully !!",
      });
    } else {
      return res.json(404, {
        message: "Task is not found !!",
      });
    }
  } catch (error) {
    return res.json(500, {
      message: error,
    });
  }
};

//edit task by task-id
module.exports.edit = async function (req, res) {
  try {
    let task = await Task.findById(req.params.id);
    if (task.user == req.userId) {
      await task.updateOne(req.body);
      return res.status(200).json({
        Message: "Task is updated successfully !!",
      });
    } else {
      return res.status(401).json({
        Message: "Request is unauthorized !!",
      });
    }
  } catch (error) {
    return res.json(500, {
      message: error,
    });
  }
};

// search task on titlle, description, status based on the key
module.exports.searchTask = async (req, res) => {
  try {
    const result = await Task.find({
      $or: [
        { title: { $regex: req.params.key } },
        { description: { $regex: req.params.key } },
        { status: { $regex: req.params.key } },
      ],
    });
    return res.json(200, {
      tasks: result,
    });
  } catch (error) {
    return res.json(500, {
      message: error,
    });
  }
};
