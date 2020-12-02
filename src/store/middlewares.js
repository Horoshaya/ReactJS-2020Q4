export const editMovieMiddleware = (movieData) => {
  return fetch(`http://localhost:4000/movies`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });
};

export const addMovieMiddleware = (movieData) => {
  return fetch(`http://localhost:4000/movies`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });
};

export const deletetMovieMiddleware = (id) => {
  return fetch(`http://localhost:4000/movies/${id}?`, {
    method: 'DELETE',
  });
};

export const getMovieMiddleware = () => {
  return fetch('http://localhost:4000/movies').then((res) => res.json());
};
