import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../services/apiId';
import defaultImg from '../../img/defaultImg.jpg';
import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getCastById(movieId)
      .then(response => {
        setCast(response.data.cast);
        setStatus(response.status);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <h3 className={css.subTitle}>Cast</h3>

      {cast.length > 0 && (
        <ul className={css.gallery}>
          {cast.map(({ profile_path, name, character }, index) => {
            return (
              <li key={index}>
                <img
                  src={`${
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : defaultImg
                  }`}
                  alt={name}
                  width={200}
                  height={300}
                />

                <p className={css.info}>{name}</p>
                <p className={css.info}>
                  <span className={css.infoEl}>Character:</span> {character}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {error && <p className={css.error}>Results not found</p>}
      {status === 200 && cast.length === 0 && (
        <p className={css.error}>Results not found</p>
      )}
    </div>
  );
}

export default Cast;
