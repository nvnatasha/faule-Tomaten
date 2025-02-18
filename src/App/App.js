import './App.css';
import searchIcon from '../icons/search.png';
import home from '../icons/home.png'

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
import MovieDetails from '../MovieDetails/MovieDetails'
import MoviesContainer from '../MoviesContainer/MoviesContainer';




function App() {
  const [movies, setMovies] = useState(moviePosters)
  const [selectedMovie, setSelectedMovie] = useState(null)
  

  function votingChange (Id, change) {
    const updated = movies.map(movie => {
      if (Id === movie.id) {
        return {...movie, vote_count: movie.vote_count + change}
      } else {
        return movie
      }
    })
    setMovies(updated)
  }

  // function renderMovieDetails() {
  //   // console.log(selectedMovie)
  //   return <MovieDetails movie={selectedMovie} />
    
  // }

  function renderMoviesContainer() {
    return (
      <MoviesContainer
      movies={movies}
      votingChange={votingChange}
      setSelectedMovie={setSelectedMovie} />
    )
  }

  return (
    <main className='App'>
      <header>
        <h1>faule Tomaten</h1>
          <button onClick={() => setSelectedMovie(null)}>
            <img src={home} alt='Home button' />
          </button>
      </header>
      {selectedMovie ? <MovieDetails movie={selectedMovie} />  : renderMoviesContainer()}
    </main>
  );
}



export default App;
