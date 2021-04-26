import { useState } from "react";
import styles from "./Movie.module.css";

export interface MovieData {
  id: number;
  isFavorite: boolean;
  title: string;
  rights: string;
  imageSmall: string;
  imageBig: string;
  description: string;
  director: string;
  category: string;
  releaseDate: string;
}

function Movie(props: { movie: MovieData; number: number; setFavorite: any }) {
  const [showDescription, setShowDescription] = useState(false);
  const { movie } = props;

  function onClick() {
    setShowDescription((prevShowDescription) => !prevShowDescription);
  }

  return (
    <div
      className={`${styles.menuItem} ${
        showDescription ? styles.expanded : ""
      } ${props.movie.isFavorite ? styles.favorite : ""}`}
      onClick={onClick}
    >
      <div className={styles.itemNumber}>
        <p>{props.number}</p>
      </div>
      <div className={styles.itemCover}>
        <img src={movie.imageBig} alt={movie.title} height="170" />
      </div>
      <div className={styles.itemInfo}>
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Category: {movie.category}</p>
        <p>Release Date: {movie.releaseDate}</p>
        {showDescription ? (
          <p className={styles.description}>
            <small>{movie.description}</small>
          </p>
        ) : null}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="50"
        viewBox="0 0 77 64"
        onClick={(e) => {
          e.stopPropagation();
          props.setFavorite(props.movie.id, !props.movie.isFavorite);
        }}
        className={styles.favorites}
      >
        <path
          className={styles.heart}
          d="m37.09 61.681c-2.47-1.28-6.67-3.96-9.84-6.26 -6.66-4.83-13.95-11.53-17.78-16.32 -5.74-7.19-8.47-14.06-8.03-20.18 0.48-6.65 4.67-12.39 11.04-15.12 2.45-1.05 4.47-1.51 7.52-1.73 2.07-0.15 4.84-0.02 6.37 0.31 2.09 0.44 5.12 1.71 6.78 2.84 2.16 1.48 4.01 3.82 4.76 6.01 0.1 0.3 0.23 0.53 0.29 0.52 0.06-0.02 0.28-0.36 0.49-0.76 0.99-1.9 3.13-4.29 5.04-5.64 2.12-1.49 4.83-2.64 7.22-3.04 2.58-0.44 6.47-0.41 9.25 0.07 4.37 0.76 9.75 4.21 12.12 7.78 3.18 4.77 3.98 10.33 2.44 16.82 -0.72 3.01-1.92 5.55-4.32 9.1 -5.2 7.7-13.35 15.01-25.02 22.44 -2.52 1.6-6.55 3.84-6.91 3.84 -0.07 0-0.7-0.3-1.42-0.68z"
        />
      </svg>
    </div>
  );
}

export default Movie;
