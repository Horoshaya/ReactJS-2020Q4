import React from 'react';
import rerender from 'react-test-renderer';
import MovieCard from './MovieCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('when NotFound', () => {
  test('then snapshot created', () => {
    const component = rerender.create(
      <Router>
        <MovieCard />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
