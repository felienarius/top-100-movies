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
      <button
        className={styles.favorites}
        onClick={(e) => {
          e.stopPropagation();
          props.setFavorite(props.movie.id, !props.movie.isFavorite);
        }}
      >
        {movie.isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
}

export default Movie;
