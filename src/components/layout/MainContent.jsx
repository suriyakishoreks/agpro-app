import React from "react";
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
            <h1>AgPro</h1>
         </main>
      </div>
   );
}