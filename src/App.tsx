import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import { MovieData } from "./components/Movie";
import MainNavigation from "./components/layout/MainNavigation";
import FavoritesPage from "./pages/Favorites";
import Top100MoviesPage from "./pages/Top100Movies";
import "./App.css";

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

function App() {
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
    <div className="app">
      <MainNavigation />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <Top100MoviesPage movies={loadedMovies} setFavorite={setFavorite}/>
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
