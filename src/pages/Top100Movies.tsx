import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

interface Entry {
  id: { attributes: { "im:id": number } };
  "im:name": { label: string };
  rights?: { label: string };
  "im:image": Array<{ label: string }>;
  summary: { label: string };
  "im:artist": { label: string };
  category: { attributes: { label: string } };
  "im:releaseDate": { attributes: { label: string } };
}
function Top100MoviesPage() {
  const [loadedMovies, setLoadedMovies] = useState([] as any[]);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkForError = (response: Response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  };

  useEffect(() => {
    setHasError(false);
    fetch("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
      .then(checkForError)
      .then((data) => {
        const movies = [];
        const entries = data.feed.entry as Entry[];
        let movieNumber = 1;

        for (const entry of entries) {
          const movie = {
            id: entry.id.attributes["im:id"],
            number: movieNumber++,
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

  return <MoviesList title="Top 100 Movies" movies={loadedMovies} />;
}

export default Top100MoviesPage;
