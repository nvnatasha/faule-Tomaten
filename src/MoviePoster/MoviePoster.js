import './MoviePoster.css';

function MoviePoster({ movie }) {
  return (
    <section className='MoviePoster'>
      <img src={movie.poster_path} alt={movie.title}/>
      <h3>{movie.vote_count}</h3>
    </section>
  );
}

export default MoviePoster;