import React, { Fragment } from "react";
// components
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
// styles
import styles from "./styles/App.module.scss";
// services

export default function App() {

   return (
      <Fragment>
         <header className={styles.headerLayout}>
            <Header />
         </header>
         <section className={styles.bodyLayout}>
            <MainContent />
         </section>
      </Fragment>
   );
}
