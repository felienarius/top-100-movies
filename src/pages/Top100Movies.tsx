import { MovieData } from "../components/Movie";
import MoviesList from "../components/MoviesList";

function Top100MoviesPage(props: {
  movies: MovieData[];
  setFavorite: (id: number, value: boolean) => void;
}) {
  return (
    <MoviesList
      title="Top 100 movies"
      movies={props.movies}
      setFavorite={props.setFavorite}
    />
  );
}

export default Top100MoviesPage;
