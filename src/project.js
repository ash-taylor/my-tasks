import Task from "./task";

export default class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.tasks = [];
    this.active = true;
  }

  getId() {
    return this.id;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  createNewTask(id, title, priority, dueDate) {
    const task = new Task(id, title, priority, dueDate);
    this.addTask(task);
    return task;
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    if (this.tasks) {
      return this.tasks;
    }
    return false;
  }

  setActive() {
    this.active = true;
  }

  setInactive() {
    this.active = false;
  }
}
