import React, { Component } from 'react';

import styles from './AddMovieButton.css';
import ModifyModal from '../ModifyModal/ModifyModal';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class AddMovieButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.triggerModal = this.triggerModal.bind(this);
  }

  triggerModal() {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <button className={styles.button} onClick={this.triggerModal}>
            + add movie
          </button>
        </ErrorBoundary>
        {this.state.isModalOpen ? (
          <ModifyModal triggerModal={this.triggerModal}></ModifyModal>
        ) : null}
      </>
    );
  }
}
