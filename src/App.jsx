import React, { Fragment } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
// components
import Header from "./components/ui/Header";
import MainContent from "./components/layout/MainContent";
// styles
import styles from "./styles/App.module.scss";
// services

export default function App() {

   return (
      <Fragment>
         <Router basename="/agpro-app">
            <header className={styles.headerLayout}>
               <Header />
            </header>
            <section className={styles.bodyLayout}>
               <MainContent />
            </section>
         </Router>
      </Fragment>
   );
}
