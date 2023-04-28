import Project from "./project";

export default {
  projects: [],
  activeProjectID: null,

  createNewProject(title, id) {
    const project = new Project(title, id);
    this.projects.push(project);
    return project;
  },

  getProjects() {
    return this.projects;
  },

  removeProject(project) {
    const index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
  },

  setActiveProject(id) {
    this.projects.forEach((project) => {
      if (project.id !== id) {
        project.setInactive();
      } else {
        project.setActive();
        this.activeProjectID = id;
      }
    });
  },

  deleteProjectById(id) {
    this.projects.forEach((project) => {
      if (project.id === id) {
        this.removeProject(project);
      }
    });
  },

  returnActiveProject() {
    if (this.projects && this.activeProjectID) {
      return this.projects.find(
        (project) => project.id === this.activeProjectID
      );
    }
    return false;
  },

  loadProjects(projectsArray) {
    projectsArray.forEach((project) => {
      this.projects.push(project);
    });
  },
};
