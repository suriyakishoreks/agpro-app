import React from "react";
import { Routes, Route } from 'react-router-dom';
// components
import Project from "../page/Project";
// styles
import styles from '../../styles/components/layout/MainContent.module.scss';

export default function MainContent() {

   return (
      <main className={styles.mainContentLayout}>
         <Routes>
            <Route path="/">
               <Route index element={<h1>Home</h1>} />
               <Route path="projects">
                  <Route index element={<h1>projects</h1>} />
                  <Route path=":projectId" element={<Project />}>
                     <Route path="board" element={<h1>board</h1>} />
                     <Route path="backlog" element={<h1>backlog</h1>} />
                  </Route>
               </Route>
               <Route path="calendar" element={<h1>calendar</h1>} />
               <Route path="*" element={<h1>error</h1>} />
            </Route>
         </Routes>
      </main>
   );
}