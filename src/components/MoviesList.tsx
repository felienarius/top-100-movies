import { FunctionComponent } from "react";
import Movie from "./Movie";
import { MovieData } from "./Movie";
import classes from "./MoviesList.module.css";

interface MoviesListProps {
  title: string;
  movies: MovieData[];
  setFavorite: (id: number, value: boolean) => void;
}

const MoviesList: FunctionComponent<MoviesListProps> = (props) => {
  const isEmpty = props.movies.length === 0;

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>{props.title}</h1>
      {props.children ? props.children : null}
      {isEmpty ? (
        <p>No results</p>
      ) : (
        props.movies.map((movie, index) => (
          <Movie
            key={movie.id}
            movie={movie}
            number={index + 1}
            setFavorite={props.setFavorite}
          />
        ))
      )}
    </section>
  );
};

export default MoviesList;
