import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
// services
import { db } from './services/db/index';
import { ProjectSchema } from './services/config/index';

export default function TestApp() {

   const [projName, setProjName] = useState('');
   const [projID, setProjID] = useState('');

   const projects = useLiveQuery(
      () => db.projects.toArray()
   );

   function createProject() {
      const project = new ProjectSchema();
      project.projectId = projID;
      project.name = projName;

      db.projects.add(project);
   }

   return (
      <div>
         <div>
            <input type="text" value={projName} placeholder="Project Name" onChange={(event) => setProjName(event.target.value)} />
            <input type="text" value={projID} placeholder="Project ID" onChange={(event) => setProjID(event.target.value)} />
            <button onClick={createProject}>create Project</button>
            <div>
               <ul>
                  {projects?.map(project => <li key={project.projectId}>
                     <ProjectCard project={project} />
                  </li>)}
               </ul>
            </div>
         </div>
      </div>
   );
}

function ProjectCard({ project }) {
   return (
      <div>
         <h4>Name: {project.name}, Id: {project.projectId}</h4>
         <input type="text" placeholder="Task title" />
         <input type="text" placeholder="Task Description" />
         <button>Create Task</button>
         <hr />
      </div>
   );
}