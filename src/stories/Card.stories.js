import React from 'react';

import MovieCard from '../components/MovieCard/MovieCard';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/initialState';
import defaultImg from '../assets/images/pulp_fiction.jpg';



export default {
  title: 'MovieCard',
  component: MovieCard,
};

const movie = {
  id: 11111,
  title: 'test',
  release_date: '11-12-1999',
  url: 'PropTypes.string',
  overview: 'PropTypes.string',
  overview: 'test overview',
  poster_path: defaultImg,
  vote_average: '9'

}

const Template = (args) => (
  <div style={{ background: '#232323', padding: '10px' }}>
  <Provider store={store}>
    <Router>
    <MovieCard {...args} />
  </Router>
  </Provider>
  </div>
);


export const Default = Template.bind({});
Default.args = movie;
