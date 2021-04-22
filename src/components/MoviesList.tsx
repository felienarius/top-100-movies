function MoviesList(props: { movies: [] }) {
  if (props.movies.length === 0) return <h1>Loading...</h1>;

  return <div>Movies List</div>;
}

export default MoviesList;
