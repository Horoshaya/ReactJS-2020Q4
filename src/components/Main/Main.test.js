import React from 'react';
import Main from './Main';
import { MainContext } from './Main';
import rerender from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

const initialStore = {
  allMoviws: [],
  movies: [
    {
      genres: ['Drama', 'Romance'],
    },
  ],
};

const store = configureStore([])(initialStore);
store.dispatch = jest.fn();

describe('Main', () => {
  it('have text', () => {
    // console.log(Main);
    // const component = rerender.create(
    //   <Provider store={store}>
    //     <MainContext.Provider value={{ test: 'test' }}>
    //       <Main />
    //     </MainContext.Provider>
    //   </Provider>,
    // );
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    const component = shallow(
      <Provider store={store}>
        <MainContext.Provider value={{ test: 'test' }}>
          <Main />
        </MainContext.Provider>
      </Provider>,
    ).dive();
    const main = component.find('main');
    expect(component).toBeTruthy();
    expect(main).toBeTruthy();
  });

  it('should created', () => {
    const component = shallow(
      <Provider store={store}>
        <MainContext.Provider value={{ test: 'test' }}>
          <Main />
        </MainContext.Provider>
      </Provider>,
    ).dive();
    const main = component.find('main');
    expect(component).toBeTruthy();
    expect(main).toBeTruthy();
  });
});
