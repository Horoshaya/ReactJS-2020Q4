import React from 'react';

import MovieCard from '../components/MovieCard/MovieCard';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/initialState';
import defaultImg from '../assets/images/pulp_fiction.jpg';



export default {
  title: 'Example/MovieCard',
  component: MovieCard,
};

const movie = {
  id: 11111,
  title: 'test',
  releaseDate: '2000/12/12',
  url: 'PropTypes.string',
  overview: 'PropTypes.string',
  overview: 'test overview',
  poster_path: defaultImg

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


// export const Default = Template.bind({});

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
