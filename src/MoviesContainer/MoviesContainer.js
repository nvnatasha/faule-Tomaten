import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster'
// import movieDetails from '../data/movie_details';

function MoviesContainer({movies, votingChange, setSelectedMovie }) {
  return (
      <section className='MoviesContainer'>
      {movies.map((movie) => (
        <MoviePoster 
        key={movie.id} 
        movie={movie} 
        votingChange={votingChange}
        setSelectedMovie={setSelectedMovie} />
      ))}
      </section>
  );
}
  
export default MoviesContainer;