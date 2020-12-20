import React from 'react';
import rerender from 'react-test-renderer';
import MovieDetails from './MovieDetails';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const initialStore = {
  allMoviws: [],
  movieDataReducer: {
    movie: [
      {
        genres: ['Drama', 'Romance'],
      },
    ],
  },
};
const movie = configureStore([])(initialStore);
movie.dispatch = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: 'test01' }),
}));

describe('when MovieDetails', () => {
  test('then snapshot created', () => {
    const component = rerender.create(
      <Provider store={movie}>
        <Router>
          <MovieDetails movie={movie} />
        </Router>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
