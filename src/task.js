export default class Task {
  #priorityList = [
    "low",
    "medium",
    "high"
  ];

  constructor(title, priority, complete = false, dueDate = "no date") {
    this.title = title;
    this.description = null;
    this.priority = this.setPriority(priority);
    this.complete = complete;
    this.dueDate = dueDate;
  }

  setTitle(title) {
    this.title = title;
  };

  getTitle() {
    return this.title;
  };

  setDescription(description) {
    this.description = description;
  };

  getDescription() {
    return this.description;
  };

  setPriority(priority) {
    if (this.#priorityList.includes(priority)) {
      this.priority = priority;
      return true;
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
}; 