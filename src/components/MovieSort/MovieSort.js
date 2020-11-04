import React, { Component } from 'react';
import styles from './MovieSort.css';

export default class MovieSort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    this.setState(({ listOpen }) => ({
      listOpen: !listOpen,
    }));
  }

  render() {
    const { list, toggleItem, headerTitle } = this.props;
    const { listOpen } = this.state;

    return (
      <div className={styles.wrapper}>
        <p className={styles.title}>sort by</p>

        <div
          className={`${styles.dropdownHeader} ${
            listOpen ? styles.arrowUp : styles.arrowDown
          }`}
          onClick={() => this.toggleList()}
        >
          <div className={styles.headerTitle}>{headerTitle}</div>
        </div>

        {listOpen && (
          <ul className={styles.list}>
            {list.map((item) => (
              <li
                className={`${styles.listItem} ${
                  item.selected ? styles.selected : ''
                }`}
                key={item.id}
                onClick={() => toggleItem(item.id, item.key)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
