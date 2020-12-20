import React, { Component } from "react";
import styles from "./ErrorBoundaryTestButton.css";

export default class ErrorBoundaryTestButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        name: "",
      },
    };

    this.isShowError = false;

    this.showError = this.showError.bind(this);
  }

  showError() {
    this.setState({ error: null });
    this.isShowError = true;
  }
  render() {
    return (
      <>
        <button
          className={styles.button}
          type="submit"
          onClick={this.showError}
        >
          Error Button
        </button>
        <div>{this.isShowError ? <p>{new Error("I crashed!")}</p> : true}</div>
      </>
    );
  }
}
