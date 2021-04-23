export interface MovieData {
  id: number;
  number: number;
  title: string;
  rights: string;
  imageSmall: string;
  imageBig: string;
  description: string;
  director: string;
  category: string;
  releaseDate: string;
}
function Movie(props: { movie: MovieData }) {
  const { movie } = props;
  return <div>
    <div>
      <p>{movie.number}</p>
      <img src={movie.imageBig} alt={movie.title} height="170"/>
    </div>
    <div>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Category: {movie.category}</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>

  </div>
  ;
}

export default Movie;
