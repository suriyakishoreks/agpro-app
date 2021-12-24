import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
// components
import Project from "../page/Project";
// styles
import styles from '../../styles/components/layout/MainContent.module.scss';

export default function MainContent() {

   return (
      <main className={styles.mainContentLayout}>
         <Routes>
            <Route path="/">
               <Route index element={<Navigate to="/projects" />} />
               <Route path="projects">
                  <Route index element={<h1>projects</h1>} />
                  <Route path=":projectId" element={<Project />}>
                     <Route path="board" element={<h1>board</h1>} />
                     <Route path="backlog" element={<h1>backlog</h1>} />
                  </Route>
               </Route>
               <Route path="calendar" element={<Navigate to="/projects" />} />
               <Route path="*" element={<h1>error</h1>} />
            </Route>
         </Routes>
      </main>
   );
}