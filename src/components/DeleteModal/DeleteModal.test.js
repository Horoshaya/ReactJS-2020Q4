import React from 'react';
import rerender from 'react-test-renderer';
import DeleteModal from './DeleteModal';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const initialStore = {
  allMoviws: [],
  movies: [
    {
      genres: ['Drama', 'Romance'],
    },
  ],
};

const store = configureStore([])(initialStore);
store.dispatch = jest.fn();

describe('DleteModal', () => {
  test('then snapshot created', () => {
    const component = rerender.create(
      <Provider store={store}>
        <DeleteModal />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
