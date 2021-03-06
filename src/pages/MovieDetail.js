import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import style from '../css/MovieDetail.module.css';

function MovieDetail() {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);

  const fetchSingleMovieApi = useCallback(async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const singleMovieJson = await response.json();
    setMovieDetail(singleMovieJson.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchSingleMovieApi();
  }, [fetchSingleMovieApi]);

  return (
    <div className={style.detail}>
      <Link to="/">
        <h4 className={style.back}>π λμκ°κΈ°</h4>
      </Link>
      <h2 className={style.title}>{movieDetail.title_long}</h2>
      {loading ? <h3 className="loading">μνμ μ€λͺμ λΆλ¬μ€κ³  μμ΄μ...</h3> : 
        <div className={style.container}>
          <div className={style.item}>
            <img src={movieDetail.large_cover_image} alt={movieDetail.title} />
          </div>
          <div className={style.item}>
            <div className={style.counts}>
              <span>μ’μμ μ π {movieDetail.like_count}κ°</span>
              <span>λ€μ΄λ‘λ μ π₯ {movieDetail.download_count}ν</span>
              <span>λ³μ  β­ {movieDetail.rating}/10.0</span>
              <span>λ°νμ β± {movieDetail.runtime}λΆ</span>
            </div>
            {movieDetail.genres.map((genre) => (
              <h4 key={genre}>{genre}</h4>
            ))}
            <p>{movieDetail.description_full}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetail;
