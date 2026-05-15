
class TaskService {
  constructor() {
    this.tasks = [];
  }

  createTask(task) {
    this.tasks.push(task);
    return task;
  }

  getTasks() {
    return this.tasks;
  }

  updateTask(id, updatedTask) {
    this.tasks[id] = updatedTask;
    return updatedTask;
  }

  deleteTask(id) {
    this.tasks.splice(id, 1);
    return "Task deleted";
  }
}

module.exports = TaskService;