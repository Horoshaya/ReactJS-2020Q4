import React from 'react';
import rerender from 'react-test-renderer';
import Modal from './Modal';

describe('when Modal', () => {
  test('then snapshot created', () => {
    const component = rerender.create(<Modal />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
