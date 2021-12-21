import { addEntryToStore } from '../db/index';

// DB related helpers
export function createNewProject(projectName) {
   addEntryToStore('projectConfig', {
      tag: projectName
   });
}

export function createNewTask() {

}