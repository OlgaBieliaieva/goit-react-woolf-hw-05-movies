import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={css.trendingList}>
      {movies.map(({ title, id }) => {
        return (
          <li className={css.link} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default MoviesList;
