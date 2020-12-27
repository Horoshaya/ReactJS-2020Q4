import React from 'react';

import AddMovieButton from '../components/AddMovieButton/AddMovieButton';
import styles from '../components/AddMovieButton/AddMovieButton.css';

export default {
  title: 'Example/Button',
  component: AddMovieButton,
};

const Template = (args) => <AddMovieButton triggerModal={() => console.log('click')} />;

export const Primary = Template.bind({});

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
