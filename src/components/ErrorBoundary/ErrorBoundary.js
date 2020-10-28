import React, { Component } from "react";
import styles from "./ErrorBoundary.css";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    console.log("error", error);
    console.log("info", info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorInfo}>
          <p>Извините, произошла ошибка!</p>
          <p>Мы пытаемся сделать все возможное, чтобы ее исправить</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
