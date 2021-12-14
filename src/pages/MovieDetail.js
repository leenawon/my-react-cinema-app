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
        <h4 className={style.back}>👈 돌아가기</h4>
      </Link>
    </div>
  )
}

export default MovieDetail;
