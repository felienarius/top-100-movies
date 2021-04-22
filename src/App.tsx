import React from "react";
import "./App.css";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";

function App() {
  const movies: any = [];

  return (
    <div className="app">
      <Header />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
