import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function MoviesContainer({movies, votingChange }) {
  return (
      <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MoviePoster key={movie.id} movie={movie} votingChange={votingChange}/>
      ))}
      </section>
  );
}
  
export default MoviesContainer;