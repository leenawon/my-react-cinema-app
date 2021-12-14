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
      <h2 className={style.title}>{movieDetail.title_long}</h2>
      {loading ? <h3 className="loading">작품의 설명을 불러오고 있어요...</h3> : 
        <div className={style.container}>
          <div className={style.item}>
            <img src={movieDetail.large_cover_image} alt={movieDetail.title} />
          </div>
          <div className={style.item}>
            <div className={style.counts}>
              <span>좋아요 수 👍 {movieDetail.like_count}개</span>
              <span>다운로드 수 📥 {movieDetail.download_count}회</span>
              <span>별점 ⭐ {movieDetail.rating}/10.0</span>
              <span>런타임 ⏱ {movieDetail.runtime}분</span>
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
