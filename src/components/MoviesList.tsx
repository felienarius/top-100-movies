import Movie from "./Movie";
import { MovieData } from "./Movie";
import classes from "./MoviesList.module.css";

function MoviesList(props: { movies: MovieData[]; title: string, setFavorite: Function }) {
  const isLoading = props.movies.length === 0;

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>{props.title}</h1>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        props.movies.map((movie, index) => (
          <Movie key={movie.id} movie={movie} number={index + 1} setFavorite={props.setFavorite} />
        ))
      )}
    </section>
  );
}

export default MoviesList;
