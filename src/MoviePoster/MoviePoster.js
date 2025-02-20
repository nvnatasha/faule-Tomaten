import './MoviePoster.css';
import upvote from '../icons/upvote.png'
import downvote from '../icons/downvote.png'


function MoviePoster({ movie, votingChange, getMovieDetails }) {
  return (
    <section className='MoviePoster'>
      <img className="poster-image" src={movie.poster_path} alt={movie.title} onClick={() =>getMovieDetails(movie.id)} />
        <div className='vote-container'>
          <button className='voteButton' onClick={() => votingChange(movie.id, "up") }> 
          <img src={upvote} alt="Upvote"/>
          </button> 
          <h3> {movie.vote_count} </h3>
          <button className='voteButton' onClick={() => votingChange(movie.id, "down") }>
          <img src={downvote} alt="Downvote"/>
          </button> 
        </div>
    </section>
  );
}

export default MoviePoster;