import React from 'react';

import AddMovieButton from '../components/AddMovieButton/AddMovieButton';
import { Provider } from 'react-redux';
import store from '../store/initialState';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const asDynamicVariables = () => {
  return (
    <Provider store={store}>
    <AddMovieButton></AddMovieButton>
  </Provider>
  );
};
