import React from 'react';
import rerender from 'react-test-renderer';
import AddMovieButton from './AddMovieButton';
import { shallow } from 'enzyme';

describe('when AddButton', () => {
  test('then snapshot created', () => {
    const component = rerender.create(<AddMovieButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('openModal', () => {
    const component = shallow(<AddMovieButton />);
    component.triggerModal;
    const addButton = component.find('button');
    addButton.simulate('click');
    expect(addButton.text()).toEqual('+ add movie');
  });
});
