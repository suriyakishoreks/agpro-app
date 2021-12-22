import { db } from './index';

export function createNewProject(project) {
   db.projects.add(project);
}