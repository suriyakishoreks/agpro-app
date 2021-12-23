import React from "react";
import { Routes, Route } from 'react-router-dom';
// components
import SideDrawer from '../ui/SideDrawer';
// styles
import styles from '../../styles/components/layout/MainContent.module.scss';

export default function MainContent() {

   return (
      <div className={styles.mainContentLayout}>
         <aside className={styles.sideDrawer}>
            <SideDrawer />
         </aside>
         <main className={styles.mainContent}>
            <Routes>
               <Route path="/">
                  <Route index element={<h1>Home</h1>} />
                  <Route path="projects">
                     <Route index element={<h1>projects</h1>} />
                  </Route>
                  <Route path="calendar" element={<h1>calendar</h1>} />
                  <Route path="*" element={<h1>error</h1>} />
               </Route>
            </Routes>
         </main>
      </div>
   );
}