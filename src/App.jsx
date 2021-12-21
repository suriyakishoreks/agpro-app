import React, { Fragment, useEffect } from "react";
// components
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";
// styles
// import styles from "./styles/App.module.scss";
// services
import { addStoreToDB, addEntryToStore } from './services/db/index';

export default function App() {

   useEffect(() => {
      addStoreToDB('test');
   }, []);

   return (
      <Fragment>
         <header>
            <Header />
         </header>
         <section>
            <MainContent />
         </section>
      </Fragment>
   );
}
