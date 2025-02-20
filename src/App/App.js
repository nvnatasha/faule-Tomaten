import './App.css';
import searchIcon from '../icons/search.png';
import home from '../icons/home.png'

// Example imports (for later):
import { useState, useEffect } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails'
import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  useEffect(() => {
    getMovies();
  },[])

  function getMovies() {
    fetch('https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies')
    .then(response => response.json())
    .then(data => setMovies([...movies, ...data]))
    .catch(error => console.log(error.message))
  }

  function getMovieDetails(id) {
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      setSelectedMovie(selectedMovie => ({ ...selectedMovie, ...data })); 
    })
    .catch(error => console.log(error.message))
  }

  function votingChange (id, direction) {
    console.log(direction)
    fetch(`https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({vote_direction: direction}), 
    })
    .then(response => response.json())
    .then(updatedMovie => { 
      setMovies(preMovies => {
        return preMovies.map(movie => {
          if (movie.id === updatedMovie.id) {
            return updatedMovie; 
          }
          return movie; 
        });
      });
    })
    .catch(error => console.log(error.message))
  }

  function renderMoviesContainer() {
    return (
      <MoviesContainer
      movies={movies}
      votingChange={votingChange}
      getMovieDetails={getMovieDetails} />
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
