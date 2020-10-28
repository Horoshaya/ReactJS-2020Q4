import React from "react";
import styles from "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Logo />
    </footer>
  );
};

export default Footer;
