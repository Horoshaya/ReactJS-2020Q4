import React from "react";
import PropTypes from "prop-types";

const MovieCard = ({ title, description, year }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{year}</p>
    </div>
  );
};

MovieCard.PropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
