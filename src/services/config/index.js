// * DB related Config
// ? DB related Constants
export const TASK_PRIORITY = {
   trivial: { id: 1, title: 'Trivial' },
   minor: { id: 2, title: 'Minor' },
   major: { id: 3, title: 'Major' },
   critical: { id: 4, title: 'Critical' }
};
export const TASK_STATUS = {
   toDo: { id: 'todo', title: 'To do' },
   inProgress: { id: 'inProgress', title: 'In Progress' },
   underQA: { id: 'underQA', title: 'Under QA' },
   blocked: { id: 'blocked', title: 'Blocked' },
   done: { id: 'done', title: 'Done' },
   reOpen: { id: 'reOpen', title: 'ReOpened' }
};
export const TASK_TYPE = {
   userStory: { id: 'userStory', title: 'User Story' },
   bug: { id: 'bug', title: 'Bug' },
};
// ? DB StoreSchema
export class ProjectSchema {
   constructor() {
      this.projectId = null;
      this.name = null;
      this.lastCreatedId = null;
      this.lastCreatedSprint = null;
      this.createTime = null;
      this.endTime = null;
   }
}
export class SprintSchema {
   constructor() {
      this.projectId = null;
      this.sprintId = null;
      this.startime = null;
      this.endTime = null;
   }
}
export class TaskSchema {
   constructor() {
      this.taskId = null;
      this.projectId = null;
      this.sprintId = null;
      this.title = null;
      this.description = null;
      this.createTime = null;
      this.estimate = null;
      this.priority = null;
      this.status = null;
      this.type = null;
      this.comments = null;
   }
}