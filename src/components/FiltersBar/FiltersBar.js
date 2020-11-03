import React, { Component } from 'react';
import styles from './FiltersBar.css';
import MovieFilters from '../MovieFilters/MovieFilters';
import MovieSort from '../MovieSort/MovieSort';

const movieFilters = [
  {
    id: 10,
    isActive: true,
    title: 'All',
  },
  {
    id: 11,
    isActive: false,
    title: 'Documentary',
  },
  {
    id: 12,
    isActive: false,
    title: 'Comedy',
  },
  {
    id: 13,
    isActive: false,
    title: 'Horror',
  },
  {
    id: 14,
    isActive: false,
    title: 'Crime',
  },
];

const movieSort = [
  {
    id: 15,
    isActive: true,
    title: 'Sort by',
  },
  {
    id: 16,
    isActive: false,
    title: 'elease Date',
  },
];

export default class FiltersBar extends Component {
  constructor() {
    super();

    this.defaultTitle = 'select sort';

    this.state = {
      title: this.defaultTitle,
      sortList: [
        {
          id: 0,
          title: 'release date',
          selected: false,
          key: 'sortList',
        },
        {
          id: 1,
          title: 'title',
          selected: false,
          key: 'sortList',
        },
      ],
    };

    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected(id) {
    let newSortList = this.state.sortList;
    let newTitile;
    newSortList.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
        newTitile = item.selected ? item.title : this.defaultTitle;
      } else {
        item.selected = false;
      }
    });
    this.setState({
      title: newTitile,
      sortList: newSortList,
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.movieFilters}>
          <MovieFilters tabs={movieFilters} />
        </div>
        <div className={styles.movieFilters}>
          <MovieSort
            headerTitle={this.state.title}
            list={this.state.sortList}
            toggleItem={this.toggleSelected}
          />
        </div>
      </div>
    );
  }
}
