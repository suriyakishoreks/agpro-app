/*
! Indexed DB is built with static store implementation in mind
! So, plan ahead on the stores you want, don't add them dynamically.
*/
import Dexie from 'dexie';

// DB Initialization
export const db = new Dexie('AgPro');
db.version(0.1).stores({
   projects: '&projectId',
   sprints: '&sprintId, projectId',
   tasks: '&taskId, sprintId, projectId'
});



