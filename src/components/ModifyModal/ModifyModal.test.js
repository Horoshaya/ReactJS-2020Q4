import React from 'react';
import rerender from 'react-test-renderer';
import ModifyModal from './ModifyModal';
import { MainContext } from '../Main/Main';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('when ModifyModal', () => {
  test('then snapshot created', () => {
    const element = rerender.create(
      <MainContext.Provider value={'test'}>
        <ModifyModal />
      </MainContext.Provider>,
    );
    const tree = element.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
