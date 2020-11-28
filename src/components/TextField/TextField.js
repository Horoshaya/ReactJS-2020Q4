import React from 'react';
import { Formik, Field, Form } from 'formik';
import styles from './TextField.css';

const TextField = ({ label, type, name, error, children }) => {
  return (
    <>
      <label className={styles.label}>
        {label}
        <Field
          className={styles.input}
          name={name}
          type={type ? type : 'text'}
        />
        {children}
      </label>
      {error ? <div className={styles.error}>{error}</div> : null}
    </>
  );
};

export default TextField;
