import React from 'react';
import rerender from 'react-test-renderer';
import GenreFilter from './GenreFilter';

describe('when GenreFilter', () => {
  test('then snapshot created', () => {
    const component = rerender.create(<GenreFilter tabs={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
