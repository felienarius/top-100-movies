import Movie from "./Movie";
import { MovieData } from "./Movie";

function MoviesList(props: { movies: MovieData[]; title: string }) {
  const isLoading = props.movies.length === 0
  
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>{props.title}</h1>
      {props.movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

export default MoviesList;
