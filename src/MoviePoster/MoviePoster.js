import './MoviePoster.css';
import upvote from '../icons/upvote.png'
import downvote from '../icons/downvote.png'
import movieDetails from '../data/movie_details'

function MoviePoster({ movie, votingChange, setSelectedMovie }) {
  
  return (
    <section className='MoviePoster'>
      <img className="poster-image" src={movie.poster_path} alt={movie.title} onClick={() => setSelectedMovie(movieDetails)} />
        <div className='vote-container'>
          <button className='voteButton' onClick={() => votingChange(movie.id, 1) }> 
          <img src={upvote} alt="Upvote"/>
          </button> 
          <h3> {movie.vote_count} </h3>
          <button className='voteButton' onClick={() => votingChange(movie.id, -1) }>
          <img src={downvote} alt="Downvote"/>
          </button> 
        </div>
    </section>
  );
}

export default MoviePoster;