import React from 'react';
import Logo from './Logo';
import rerender from 'react-test-renderer';

describe('Logo', () => {
  it('snapshot should be created', () => {
    const component = rerender.create(<Logo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
