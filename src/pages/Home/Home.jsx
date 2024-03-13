import { useState, useEffect } from 'react';
import getTrending from '../../services/apiTrending';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <main className={css.pageContainer}>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
}

export default Home;
