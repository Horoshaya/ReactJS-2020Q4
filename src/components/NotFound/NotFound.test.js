import React from 'react';
import rerender from 'react-test-renderer';
import NotFound from './NotFound';
import { BrowserRouter as Router } from 'react-router-dom';

describe('when NotFound', () => {
  test('then snapshot created', () => {
    const component = rerender.create(
      <Router>
        <NotFound />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
