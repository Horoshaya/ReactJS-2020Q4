import React from 'react';
import styles from './TextField.css';

const TextField = ({ label, title, type, name, handleChange, children }) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        name={name}
        type={type ? type : 'text'}
        defaultValue={title}
        onChange={(e) => handleChange(e.target.value)}
      />
      {children}
    </label>
  );
};

export default TextField;
