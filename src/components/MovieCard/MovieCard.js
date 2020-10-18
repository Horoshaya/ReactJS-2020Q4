import React from "react";
import styles from "./MovieCard.css";
import PropTypes from "prop-types";
import MovieMoreInfoButton from "../MovieMoreInfoButton/MovieMoreInfoButton";

const MovieCard = ({ imgUrl, title, description, year }) => {
  return (
    <div className={styles.card}>
      <MovieMoreInfoButton />
      <img className={styles.img} src={imgUrl} />
      <div className={styles.mainInfo}>
        <h3>{title}</h3>
        <p className={styles.year}>{year}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
