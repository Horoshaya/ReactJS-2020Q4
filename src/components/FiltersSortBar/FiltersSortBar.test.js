import React from 'react';
import rerender from 'react-test-renderer';
import FiltersSortBar from './FiltersSortBar';
import { MainContext } from '../Main/Main';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { GenreFilter } from '../GenreFilter/GenreFilter';
import { mount } from 'enzyme';

// const Foo = FiltersSortBar.type;
jest.mock('../GenreFilter/GenreFilter', () => () => 'GenreFilter');
jest.mock('../SortPanel/SortPanel', () => () => 'SortPanel');

describe('when FiltersSortBar', () => {
  test('then snapshot created', () => {
    const { asFragment } = render(<FiltersSortBar />);
    expect(asFragment()).toMatchSnapshot();
    // const brandChildComponent = <GenreFilter />;
    // // const component = rerender.create(<Footer>{brandChildComponent}</Footer>);
    // const component = rerender.create(
    //   <MainContext.Provider value={'test'}>
    //     <Foo>{brandChildComponent}</Foo>,
    //   </MainContext.Provider>,
    // );
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });
});

// const Foo = FiltersSortBar.type;
// jest.mock('../GenreFilter/GenreFilter', () => () => 'GenreFilter');
// jest.mock('../SortPanel/SortPanel', () => () => 'SortPanel');

// jest.doMock('../SortPanel/SortPanel', () => {
//   return jest.fn(() => {});
// });

// const ComponentToMock = require('../SortPanel/SortPanel').default;

// describe('when FiltersSortBar', () => {
//   test('then snapshot created', () => {
//     // const wrapper = mount(<SortPanel />);
//     const component = rerender.create(
//       <MainContext.Provider value={'test'}>
//         <FiltersSortBar></FiltersSortBar>,
//       </MainContext.Provider>,
//     );
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
