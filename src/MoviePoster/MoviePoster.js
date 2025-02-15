import './MoviePoster.css';
import upvote from '../icons/upvote.png'
import downvote from '../icons/downvote.png'

function MoviePoster({ movie, votingChange }) {
  return (
    <section className='MoviePoster'>
      <img className="poster-image" src={movie.poster_path} alt={movie.title}/>
        <div className='vote-container'>
          <button className='voteButton' onClick={() => votingChange(movie.id, 1) }> 
          <img src={upvote} />
          </button> 
           <h3> {movie.vote_count} </h3>
          <button className='voteButton' onClick={() => votingChange(movie.id, -1) }>
          <img src={downvote} />
          </button> 
        </div>
    </section>
  );
}

export default MoviePoster;