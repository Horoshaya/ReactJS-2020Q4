import React from 'react';
import rerender from 'react-test-renderer';
import MovieMoreInfo from './MovieMoreInfo';
import { shallow } from 'enzyme';

describe('when MovieMoreInfo', () => {
  test('then snapshot created', () => {
    const component = rerender.create(<MovieMoreInfo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('openModal', () => {
    const component = shallow(<MovieMoreInfo />);
    component.triggerModal;
    const closeIcon = component.find('div');
    closeIcon.simulate('click');
    expect(component.find('ul')).toBeTruthy();
  });
});
