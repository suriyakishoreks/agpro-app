import React from "react";
// components
import StyledButton from "../ui/StyledButton";
// styles
import styles from "../../styles/components/page/Projects.module.scss";

export default function Projects() {

   return (
      <div className={styles.container}>
         <div className={styles.headingContainer}>
            <h1>Projects</h1>
            <StyledButton title="+ New Project" customStyles={{ marginLeft: '30px' }} />
         </div>
      </div>
   );
}