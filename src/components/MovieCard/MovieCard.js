import React, { Component } from 'react';
import styles from './MovieCard.css';
import PropTypes from 'prop-types';
import MovieMoreInfoButton from '../MovieMoreInfoButton/MovieMoreInfoButton';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditModal: false,
      isDeleteModal: false,
      isModalShow: false,
    };

    this.showMoreInfoModal = this.showMoreInfoModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  resetModals() {
    this.setState({ isEditModal: false });
    this.setState({ isDeleteModal: false });
  }

  openModal(modalName) {
    if (modalName === 'edit') {
      this.setState({ isEditModal: true });
    } else if (modalName === 'delete') {
      this.setState({ isDeleteModal: true });
    }
  }

  showMoreInfoModal() {
    this.resetModals();
    this.state.isModalShow
      ? this.setState({ isModalShow: false })
      : this.setState({ isModalShow: true });
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <ErrorBoundary>
          <div className={styles.card}>
            <MovieMoreInfoButton
              showMoreInfoModal={this.showMoreInfoModal}
              openModal={this.openModal}
              isModalShow={this.state.isModalShow}
            />
            <img className={styles.img} src={this.props.imgUrl} />
            <div className={styles.mainInfo}>
              <h3>{this.props.title}</h3>
              <p className={styles.year}>{this.props.year}</p>
            </div>
            <p>{this.props.description}</p>
          </div>
        </ErrorBoundary>
        {this.state.isEditModal ? (
          <EditModal
            showMoreInfoModal={this.showMoreInfoModal}
            isModalShow={this.state.isModalShow}
            movieInfo={this.props}
          ></EditModal>
        ) : (
          <></>
        )}
        {this.state.isDeleteModal ? (
          <DeleteModal
            showMoreInfoModal={this.showMoreInfoModal}
            isModalShow={this.state.isModalShow}
          ></DeleteModal>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
