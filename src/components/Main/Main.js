import React from "react";
import MovieList from "../MovieList/MovieList";
import FiltersBar from "../FiltersBar/FiltersBar";

const Main = () => {
  return (
    <main>
      <FiltersBar />
      <MovieList />
    </main>
  );
};

export default Main;
