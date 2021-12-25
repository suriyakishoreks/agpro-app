import React from 'react';
// styles
import styles from '../../styles/components/ui/StyledButton.module.scss';

export default function StyledButton({ customStyles, title }) {

   return (
      <button className={styles.styledButton} style={customStyles}>{title}</button>
   );
}