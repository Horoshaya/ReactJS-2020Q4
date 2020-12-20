import React from 'react';
import rerender from 'react-test-renderer';
import GenreTab from './GenreTab';
import { MainContext } from '../Main/Main';

describe('GenreTab', () => {
  test('snapshot sould be created', () => {
    console.log(GenreTab);
    const element = rerender.create(
      <MainContext.Provider value={'test'}>
        <GenreTab />
      </MainContext.Provider>,
    );
    const tree = element.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
