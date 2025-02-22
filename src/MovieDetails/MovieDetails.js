import './MovieDetails.css';

function MovieDetails( {movie} ) {
  if (!movie) {
    return <p>Loading...</p> 
  }  

  const genres = movie.genre_ids || []

  return (
    <section className='MovieDetails'>
      <img className='BackdropImg' src={movie.backdrop_path} alt={`${movie.title} backdrop`} />
      <div className='details-container'>
        <h2>{movie.title}</h2>
        <div className="genres">
          {genres.map((genre, index) => (
            <span key={index} className="genre">{genre}</span>
          ))}
        </div>
        <p>{movie.overview}</p>
      </div>
    </section>
  )
}

export default MovieDetails;
