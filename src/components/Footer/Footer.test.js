import React from 'react';
import Footer from './Footer';
import renderer from 'react-test-renderer';

test('FooterSection matches the Snapshot', () => {
  const component = renderer.create(<Footer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
