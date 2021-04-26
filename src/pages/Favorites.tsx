import { MovieData } from "../components/Movie";
import MoviesList from "../components/MoviesList";

function FavoritesPage(props: {
  movies: MovieData[];
  setFavorite: (id: number, value: boolean) => void;
}) {
  return <MoviesList
  title="My favorite movies"
  movies={props.movies}
  setFavorite={props.setFavorite}
/>
}

export default FavoritesPage;
