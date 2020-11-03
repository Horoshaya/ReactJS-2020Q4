import React from 'react';
import styles from './TextField.css';

const TextField = ({ label, title, type }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type ? type : 'text'}
        defaultValue={title}
      />
    </label>
  );
};

export default TextField;
