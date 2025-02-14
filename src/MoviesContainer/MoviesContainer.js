import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'

function MoviesContainer({movies}) {
  return (
      <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MoviePoster key={movie.id} movie={movie}/>
      ))}
      </section>
  );
}
  
export default MoviesContainer;