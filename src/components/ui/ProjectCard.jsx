import React from 'react';
// styles
import styles from '../../styles/components/ui/ProjectCard.module.scss';

export default function ProjectCard({ title, code, description }) {

   return (
      <section className={styles.projectContainer}>
         <div>
            <h1>{title}</h1>
            <p>Key: <span>{code}</span></p>
         </div>
         <p>{description}</p>
      </section>
   );
}