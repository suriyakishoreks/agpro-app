import React from "react";
import { Link, useLocation } from "react-router-dom";
// components
import StyledButton from "../ui/StyledButton";
// styles
import logo from '../../assets/AgPro.svg';
import settingIcon from '../../assets/settings.svg';
import styles from '../../styles/components/ui/Header.module.scss';

export default function Header() {

   const location = useLocation();

   return (
      <div className={styles.headerContainer}>
         <div className={styles.logoContainer}>
            <Link className={styles.logoLink} to="/">
               <img src={logo} alt="logo" height="35px" width="35px" />
               <h1>AgPro</h1>
            </Link>
         </div>
         <div className={styles.menuContainer}>
            <nav>
               <NavItem title="Projects" route="/projects" active={location?.pathname?.includes('/projects')} />
               <NavItem title="Calendar" route="/calendar" active={location?.pathname?.includes('/calendar')} />
               <StyledButton title="Create Task" customStyles={{ marginLeft: '30px' }} />
            </nav>
            <button>
               <img className={styles.settingIcon} src={settingIcon} alt="Settings Icon" height="30px" width="30px" />
            </button>
         </div>
      </div>
   );
}

function NavItem({ title, route, active }) {
   return (
      <div className={styles.navItem}>
         <Link className={styles.navLink} to={route}>{title}</Link>
         <div style={active ? {} : { width: 0 }} className={styles.navBottomBar}></div>
      </div>
   );
}