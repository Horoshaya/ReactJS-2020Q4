import React from 'react';
import styles from './TextField.css';

const TextField = ({ label, title, children }) => {
  return (
    <>
      <label className={styles.label}>
        {label}
        <input className={styles.input} type="text" defaultValue={title} />
      </label>
    </>
  );
};

export default TextField;
