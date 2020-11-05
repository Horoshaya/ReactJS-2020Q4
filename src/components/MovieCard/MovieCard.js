import React, { Component } from 'react';

import styles from './MovieCard.css';
import MovieMoreInfo from '../MovieMoreInfo/MovieMoreInfo';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ModifyModal from '../ModifyModal/ModifyModal';
import DeleteModal from '../DeleteModal/DeleteModal';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditModal: false,
      isDeleteModal: false,
    };

    this.triggerModal = this.triggerModal.bind(this);
  }

  triggerModal(modalName) {
    if (modalName === 'modify') {
      this.setState(({ isEditModal }) => ({
        isEditModal: !isEditModal,
      }));
    } else if (modalName === 'delete') {
      this.setState(({ isDeleteModal }) => ({
        isDeleteModal: !isDeleteModal,
      }));
    }
  }

  render() {
    return (
      <>
        <ErrorBoundary>
          <div className={styles.card}>
            <MovieMoreInfo triggerModal={this.triggerModal} />
            <img className={styles.img} src={this.props.imgUrl} />
            <div className={styles.mainInfo}>
              <h3>{this.props.title}</h3>
              <p className={styles.year}>{this.props.year}</p>
            </div>
            <p>{this.props.description}</p>
          </div>
        </ErrorBoundary>

        {this.state.isEditModal ? (
          <ModifyModal
            triggerModal={this.triggerModal}
            movieInfo={this.props}
          ></ModifyModal>
        ) : null}
        {this.state.isDeleteModal ? (
          <DeleteModal triggerModal={this.triggerModal}></DeleteModal>
        ) : null}
      </>
    );
  }
}
