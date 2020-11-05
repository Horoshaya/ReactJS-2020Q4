import React, { Component } from 'react';
import styles from './MovieMoreInfo.css';

export default class MovieMoreInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
    };

    this.triggerModal = this.triggerModal.bind(this);
  }

  triggerModal() {
    this.setState(({ isDropdownOpen }) => ({
      isDropdownOpen: !isDropdownOpen,
    }));
  }

  render() {
    return (
      <>
        <div className={styles.moreButton} onClick={this.triggerModal}></div>

        {this.state.isDropdownOpen ? (
          <ul className={styles.list}>
            <span
              className={styles.closeIcon}
              onClick={this.triggerModal}
            ></span>
            <li
              className={styles.itemButton}
              onClick={() => this.props.triggerModal('modify')}
            >
              Edit
            </li>
            <li
              className={styles.itemButton}
              onClick={() => this.props.triggerModal('delete')}
            >
              Delete
            </li>
          </ul>
        ) : null}
      </>
    );
  }
}
