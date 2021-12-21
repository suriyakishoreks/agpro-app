import React, { Fragment, useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
// components
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
// styles
// import styles from "./styles/App.module.scss";
// services
import { db } from './services/db/index';
import { ProjectSchema } from './services/config/index';

export default function App() {

   const [inputVal, setInputVal] = useState('');

   const projects = useLiveQuery(
      () => db.projects.toArray()
   );

   function onClickHandler() {
      const project = new ProjectSchema();
      project.projectId = inputVal;

      db.projects.add(project);
   }

   return (
      <div>
         <input type="text" value={inputVal} onChange={(event) => setInputVal(event.target.value)} />
         <button onClick={onClickHandler}>create Project</button>
         <div>
            <ul>
               {projects?.map(project => <li key={project.projectId}>
                  {project.name}
               </li>)}
            </ul>
         </div>
      </div>
   );

   // return (
   //    <Fragment>
   //       <header>
   //          <Header />
   //       </header>
   //       <section>
   //          <MainContent />
   //       </section>
   //    </Fragment>
   // );
}
