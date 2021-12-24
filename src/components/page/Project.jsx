import React from "react";
import { Outlet } from "react-router-dom";
// components
import SideDrawer from '../ui/SideDrawer';
// styles
import styles from "../../styles/components/page/Project.module.scss";

export default function Project() {

   return (
      <div className={styles.container}>
         <aside className={styles.sideDrawer}>
            <SideDrawer />
         </aside>
         <div className={styles.mainContent}>
            <Outlet />
         </div>
      </div>
   );
}

