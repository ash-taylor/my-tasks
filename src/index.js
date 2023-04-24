import Task from "./task";
import "./styles/style.css"

const tasks = [];

tasks[0] = new Task("Fix Door", "low");

console.log(tasks[0].title);