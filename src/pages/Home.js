import React, { useEffect, useState } from 'react';
import SingleMovie from '../components/SingleMovie';
import style from '../css/Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const fetchMovieApi = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year');
    const movieJson = await response.json();
    setMovieList(movieJson.data.movies);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchMovieApi();
  }, []);

  return (
    <div>
      <h1 className={style.title}>πΏ Welcome To My Cinema πΏ</h1>
      {loading ? <h3 className="loading">λ©μλ μνλ€μ λΆλ¬μ€κ³  μμ΄μ...</h3> : 
        <div className={style.container}>
          {movieList.map((movie) => (
            <SingleMovie key={movie.id} id={movie.id} movieImage={movie.medium_cover_image} title={movie.title} genres={movie.genres}/>
          ))}
        </div>
      }
    </div>
  )
}

export default Home;
