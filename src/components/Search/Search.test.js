import React from 'react';
import rerender from 'react-test-renderer';
import Search from './Search';
import { shallow } from 'enzyme';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('when Search', () => {
  test('then snapshot created', () => {
    const component = rerender.create(<Search />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('then snapshot created', () => {
    const component = shallow(<Search />);

    const input = component.find('input');
    input.value = 'test';
    const button = component.find('button');
    button.simulate('click', {
      preventDefault: () => {},
      target: {
        value: 'test',
      },
    });
    expect(mockHistoryPush).toHaveBeenCalledWith({
      pathname: '/search',
      search: 'test',
    });
  });
});
