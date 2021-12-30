import React from "react";
// components
import ProjectCard from "../ui/ProjectCard";
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
         <ProjectCard title='test' code='TST' description='lo34iuhu43it 2uiuy43 eru2348 2r323ruy23 r3y3298r98
         3r2ur32y32h 839r2 y293r8 8 9y2398 9 h982r2 hof283 ho 9y o3f 8323 289h 43 t3454y  54y 54yy4235yy53' />
      </div>
   );
}