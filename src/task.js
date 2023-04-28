export default class Task {
  #priorityList = ["low", "medium", "high"];

  constructor(id, title, priority, dueDate, complete = false) {
    this.id = id;
    this.title = title;
    this.description = null;
    this.priority = this.setPriority(priority);
    this.complete = complete;
    this.dueDate = dueDate;
  }

  getId() {
    return this.id;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setPriority(priority) {
    if (this.#priorityList.includes(priority)) {
      return priority;
    }
    return null;
  }

  getPriority() {
    if (this.priority) {
      return this.priority;
    }
    return false;
  }

  toggleStatus() {
    this.complete = this.complete === false;
  }

  getStatus() {
    return this.complete;
  }

  getTasks = [];
}
