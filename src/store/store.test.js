import {
  getMovieFromTitleAction,
  getMovieFromIdAction,
  sortByDateAndRatingAcrtion,
  filterByGenreAction,
} from './actions/actionCreators';
import movieReducer from './reducers/movieData';
import { getMoviesThunk } from './middlewares';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

let state = {
  allMovies: [
    {
      title: 'test',
      id: '1',
      genres: ['comedy'],
    },
    {
      title: 'test1',
      id: '2',
      genres: ['documentary'],
    },
    {
      title: 'test2',
      id: '3',
      genres: ['comedy'],
    },
  ],
  movies: {},
};

let movieData = {
  data: [
    {
      title: 'test',
      id: '1',
      genres: ['comedy'],
    },
    {
      title: 'test1',
      id: '2',
      genres: ['documentary'],
    },
    {
      title: 'test2',
      id: '3',
      genres: ['comedy'],
    },
  ],
  movies: {},
};

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(movieData),
  }),
);

describe('Store', () => {
  const store = mockStore({});
  afterEach(() => {
    fetchMock.restore();
    store.clearActions();
  });

  test('getMovieFromTitleAction', () => {
    let action = getMovieFromTitleAction('test');
    let state = {
      allMovies: [
        {
          title: 'test',
          id: '1',
        },
      ],
    };

    let newState = movieReducer(state, action);
    expect(newState.searchedMovies).toBeTruthy();
  });

  test('getMovieFromIdAction', () => {
    let action = getMovieFromIdAction('10101');
    let state = {
      allMovies: [
        {
          title: 'test',
          id: '1',
        },
      ],
    };

    let newState = movieReducer(state, action);
    expect(newState.movie).toBeTruthy();
  });

  test('sortByDateAndRatingAcrtion', () => {
    let action = sortByDateAndRatingAcrtion('rating', state);

    const updatedMovies = state.allMovies.sort(
      (movie1, movie2) => movie2.vote_average - movie1.vote_average,
    );

    let newState = movieReducer(state, action);
    expect(newState.movies).toEqual(updatedMovies);
  });

  test('filterByGenreAction', () => {
    let action = filterByGenreAction('comedy', state);
    let newState = movieReducer(state, action);
    expect(newState.movies.length).toBe(2);
  });

  test('filterByGenreAction', () => {
    let action = filterByGenreAction('comedy', state);
    let newState = movieReducer(state, action);
    expect(newState.movies.length).toBe(2);
  });

  test('getMoviesThunk', () => {
    const store = mockStore({});
    const url = 'http://localhost:4000/movies';
    fetchMock.once(url, { body: movieData });
    const expectedActions = [{ type: 'GET_MOVIE', payload: movieData.data }];

    const dispatchedStore = store.dispatch(getMoviesThunk());
    return dispatchedStore.then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
