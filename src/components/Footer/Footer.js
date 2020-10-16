import React from "react";
import styles from "./Footer.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Logo />
    </footer>
  );
};

export default Footer;
