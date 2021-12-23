import React from "react";
// styles
import logo from '../../assets/AgPro.svg';
import settingIcon from '../../assets/settings.svg';
import styles from '../../styles/components/ui/Header.module.scss';

export default function Header() {
   return (
      <div className={styles.headerContainer}>
         <div className={styles.logoContainer}>
            <img src={logo} alt="logo" height="40px" width="40px" />
            <h1>AgPro</h1>
         </div>
         <div className={styles.menuContainer}>
            <nav>
               <NavItem title="Projects" />
               <NavItem title="Calendar" />
            </nav>
            <button>
               <img className={styles.settingIcon} src={settingIcon} alt="Settings Icon" height="40px" width="40px" />
            </button>
         </div>
      </div>
   );
}

function NavItem({ title }) {
   return (
      <div className={styles.navItem}>
         <h1>{title}</h1>
         <div className={styles.navBottomBar}></div>
      </div>
   );
}