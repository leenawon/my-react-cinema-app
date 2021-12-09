import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../css/SingleMovie.module.css';

function SingleMovie({id, movieImage, title, genres}) {
  return (
    <div className={style.item}>
      <Link to={`movie/${id}`}>
        <img src={movieImage} alt={title} />
      </Link>
      <div className={style.summary}>
        <Link to={`movie/${id}`}>
          <h3>{title}</h3>
        </Link>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// prop types in single movie
SingleMovie.propTypes = {
  id: PropTypes.number.isRequired,
  movieImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SingleMovie;
