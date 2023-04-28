import "./styles/style.css";
import { newProjectIconSVG, deleteProjectIconSVG } from "./icons";
import ProjectHandler from "./projectHandler";

const projectHandler = ProjectHandler;

const DomRender = () => {
  const appGrid = document.querySelector(".app-grid");
  const clearAppGrid = () => {
    while (appGrid.firstChild) {
      const child = appGrid.firstChild;
      appGrid.removeChild(child);
    }
  };

  const buildTaskDiv = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-container");
    const taskComplete = document.createElement("input");
    taskComplete.classList.add("task-checkbox");
    taskComplete.id = `checkbox-${task.id}`;
    taskComplete.setAttribute("type", "checkbox");

    if (task.complete) {
      taskComplete.checked = true;
    } else {
      taskComplete.checked = false;
    }

    taskDiv.appendChild(taskComplete);

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = `${task.title}`;
    taskDiv.appendChild(taskTitle);

    const taskPriority = document.createElement("div");
    taskPriority.classList.add("task-priority");
    taskPriority.textContent = `Priority: ${task.priority}`;
    taskDiv.appendChild(taskPriority);

    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("task-duedate");
    taskDueDate.textContent = `Due: ${task.dueDate}`;
    taskDiv.appendChild(taskDueDate);

    appGrid.appendChild(taskDiv);
  };

  // New Project Form
  const newProjectForm = document.querySelector(".new-project-form");
  const toggleNewProjectForm = () => {
    newProjectForm.classList.toggle("active");
  };

  // New Task Form
  const newTaskForm = document.querySelector(".new-task-form");

  const toggleNewTaskForm = () => {
    newTaskForm.classList.toggle("active");
  };

  // Project Bar
  const projectsGrid = document.querySelector(".project-grid");
  const buildProjectButton = (project) => {
    console.log(project);
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.id = project.getId();
    const projectTitle = document.createElement("h3");
    projectTitle.innerText = `${project.title}`;
    projectDiv.appendChild(projectTitle);
    const buttonsDiv = document.createElement("div");
    const newIcon = newProjectIconSVG();
    newIcon.id = project.id;
    const deleteIcon = deleteProjectIconSVG();
    deleteIcon.id = project.id;

    // Select Project
    projectDiv.addEventListener("click", (event) => {
      // Checks project isn't already 'active'
      if (!projectDiv.classList.contains("active")) {
        // Sets all other projects to 'inactive'
        document.querySelectorAll(".project").forEach((node) => {
          node.classList.remove("active");
        });
        projectDiv.classList.toggle("active");
        projectHandler.setActiveProject(event.target.id);
        // TO DO: Render Tasks
        clearAppGrid();
        const currentProject = projectHandler.returnActiveProject();
        const tasks = currentProject.getTasks();
        if (tasks) {
          tasks.forEach((task) => buildTaskDiv(task));
        }
      }
    });

    // Create new task
    newIcon.addEventListener("click", (event) => {
      // project id
      console.log(event.target.id);
      // TO DO - New Task
      toggleNewTaskForm();
    });

    // Delete Project
    deleteIcon.addEventListener("click", (event) => {
      projectHandler.deleteProjectById(event.target.id);
      projectsGrid.removeChild(projectDiv);
      clearAppGrid();
      localStorage.setItem(
        "Projects",
        JSON.stringify(projectHandler.getProjects())
      );
    });

    buttonsDiv.appendChild(newIcon);
    buttonsDiv.appendChild(deleteIcon);
    projectDiv.appendChild(buttonsDiv);
    projectsGrid.appendChild(projectDiv);
  };

  return {
    toggleNewProjectForm,
    toggleNewTaskForm,
    buildProjectButton,
    buildTaskDiv,
  };
};

const DomElements = () => {
  const domRender = DomRender();

  const localProjects = JSON.parse(localStorage.getItem("Projects"));
  if (localProjects) {
    localProjects.forEach((project) => {
      const thisProject = projectHandler.createNewProject(
        project.title,
        project.id
      );

      if (project.tasks) {
        project.tasks.forEach((task) => {
          const newTask = thisProject.createNewTask(
            task.id,
            task.title,
            task.priority,
            task.dueDate
          );
          newTask.setDescription(task.description);
        });
      }
      domRender.buildProjectButton(thisProject);
    });
  }
  // })
  //     }
  //
  //   });
  // }

  // Task Options
  const allBtn = document.getElementById("allBtn");
  const todayBtn = document.getElementById("todayBtn");
  const weekBtn = document.getElementById("weekBtn");
  const importantBtn = document.getElementById("importantBtn");
  const completedBtn = document.getElementById("completedBtn");
  const newProjectCancelBtn = document.getElementById(
    "new-project-form-cancel"
  );
  const newProjectSaveBtn = document.getElementById("new-project-form-save");
  const newTaskCancelBtn = document.getElementById("new-task-form-cancel");
  const newTaskSaveBtn = document.getElementById("new-task-form-save");

  // Project Options
  const newProjectBtn = document.getElementById("newProjectBtn");
  const projectTitle = document.getElementById("projectTitle");

  // Task Form
  const taskTitle = document.getElementById("tasktitle");
  const taskDescription = document.getElementById("taskdescription");
  const taskPriority = document.getElementById("taskpriority");
  const taskDueDate = document.getElementById("taskduedate");

  const clearTaskForm = () => {
    taskTitle.value = "";
    taskDescription.value = "";
    taskPriority.value = "";
    taskDueDate.value = "";
  };

  const addEventListeners = () => {
    // Task Bar Buttons
    allBtn.addEventListener("click", () => {
      console.log("ALL TASKS");
    });
    todayBtn.addEventListener("click", () => {
      console.log("TODAY'S TASKS");
    });
    weekBtn.addEventListener("click", () => {
      console.log("THIS WEEK'S TASKS");
    });
    importantBtn.addEventListener("click", () => {
      console.log("IMPORTANT TASKS");
    });
    completedBtn.addEventListener("click", () => {
      console.log("COMPLETED TASKS");
    });
    // New Project Buttons
    newProjectBtn.addEventListener("click", () => {
      domRender.toggleNewProjectForm();
    });
    newProjectCancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      projectTitle.value = "";
      domRender.toggleNewProjectForm();
    });
    // create new project
    newProjectSaveBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const title = projectTitle.value;
      projectTitle.value = "";
      domRender.toggleNewProjectForm();
      const id = `project-${title.replace(/\s/g, "").trim().toLowerCase()}`;
      const project = projectHandler.createNewProject(title, id);
      domRender.buildProjectButton(project);
      console.log(id);
      console.log(JSON.stringify(project));
      localStorage.setItem(
        "Projects",
        JSON.stringify(projectHandler.getProjects())
      );
    });
    // New Task Buttons
    newTaskCancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      domRender.toggleNewTaskForm();
      clearTaskForm();
    });
    newTaskSaveBtn.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event);
      console.log(projectHandler.activeProjectID);
      console.log(projectHandler.getProjects());

      const title = taskTitle.value;
      const id = `task-${title.replace(/\s/g, "").trim().toLowerCase()}`;
      const description = taskDescription.value;
      const priority = taskPriority.value;
      const dueDate = taskDueDate.value;

      console.log(id);
      console.log(title);
      console.log(description);
      console.log(priority);
      console.log(dueDate);

      projectHandler.projects.forEach((project) => {
        if (project.id === projectHandler.activeProjectID) {
          const newTask = project.createNewTask(id, title, priority, dueDate);
          newTask.setDescription(description);
          console.log(project.getTasks());
          domRender.buildTaskDiv(newTask);
        }
      });
      localStorage.setItem(
        "Projects",
        JSON.stringify(projectHandler.getProjects())
      );
      clearTaskForm();
      domRender.toggleNewTaskForm();
    });
  };

  return {
    allBtn,
    todayBtn,
    weekBtn,
    importantBtn,
    completedBtn,
    newProjectBtn,
    addEventListeners,
  };
};

function appController() {
  // init DOM buttons
  const domButtons = DomElements();
  domButtons.addEventListeners();
  // localStorage.clear();
}

appController();
