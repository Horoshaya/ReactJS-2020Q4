import React from 'react';
import rerender from 'react-test-renderer';
import SortPanel from './SortPanel';
import { MainContext } from '../Main/Main';

const Foo = SortPanel.type;

describe('when SortPanel', () => {
  test('then snapshot created', () => {
    const component = rerender.create(
      <MainContext.Provider value={'test'}>
        <Foo list={[]} />
      </MainContext.Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
