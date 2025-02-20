import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'


function MoviesContainer({movies, votingChange, getMovieDetails }) {
  return (
      <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MoviePoster 
        key={movie.id} 
        movie={movie} 
        votingChange={votingChange}
        getMovieDetails={ getMovieDetails} />
      ))}
      </section>
  );
}

export default MoviesContainer;