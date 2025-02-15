import './App.css';
import searchIcon from '../icons/search.png';

// Example imports (for later):
import { useState, useEffect } from 'react';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';
import MoviesContainer from '../MoviesContainer/MoviesContainer';




function App() {
  const [movies, setMovies] = useState(moviePosters)
  

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

  return (
    <main className='App'>
      <header>
        <h1>faule Tomaten</h1>
      </header>
      <MoviesContainer movies={movies} votingChange={votingChange}/>
    </main>
  );
}

export default App;
