import React, { useEffect, useState } from 'react';

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
      <h1>my react project</h1>
      {loading ? <h3>Loading...</h3> : null}
    </div>
  )
}

export default Home;