import { useEffect, useState } from "react";
import { MovieData } from "../components/Movie";
import MoviesList from "../components/MoviesList";

interface Entry {
  id: { attributes: { "im:id": number } };
  "im:name": { label: string };
  rights?: { label: string };
  "im:image": { label: string }[];
  summary: { label: string };
  "im:artist": { label: string };
  category: { attributes: { label: string } };
  "im:releaseDate": { attributes: { label: string } };
}
function Top100MoviesPage() {
  const [loadedMovies, setLoadedMovies] = useState([] as MovieData[]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkForError = (response: Response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  };

  const setFavorite = (id: number, value: boolean) => {
    const newMovie = loadedMovies.filter((movie) => movie.id === id)[0];
    newMovie.isFavorite = value;
    const tmpMovies = loadedMovies.map((movie) =>
      movie.id === id ? newMovie : movie
    );
    setLoadedMovies(tmpMovies);
  };

  useEffect(() => {
    console.log("Fetching...");
    setHasError(false);
    fetch("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then(checkForError)
      .then((data) => {
        const movies = [];
        const entries = data.feed.entry as Entry[];

        for (const entry of entries) {
          const movie = {
            id: entry.id.attributes["im:id"],
            title: entry["im:name"].label,
            rights: entry.rights ? entry.rights.label : "",
            imageSmall: entry["im:image"][0].label,
            imageBig: entry["im:image"][2].label,
            description: entry.summary.label,
            director: entry["im:artist"].label,
            category: entry.category.attributes.label,
            releaseDate: entry["im:releaseDate"].attributes.label,
            isFavorite: false,
          };

          movies.push(movie);
        }

        setLoadedMovies(movies);
      })
      .catch((error) => {
        setHasError(true);
        setErrorMessage(error);
      });
  }, []);

  if (hasError) {
    return (
      <section>
        <h2>Ooops there was an error!</h2>
        <p>{errorMessage}</p>
      </section>
    );
  }

  return (
    <MoviesList
      title="Top 100 Movies"
      movies={loadedMovies}
      setFavorite={setFavorite}
    />
  );
}

export default Top100MoviesPage;
