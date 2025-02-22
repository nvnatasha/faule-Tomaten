import './App.css';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import home from '../icons/home.png';

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
    getMovies()
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
      setSelectedMovie(selectedMovie => ({ ...selectedMovie, ...data }))
      navigate(`/${id}`)
    })
    .catch(error => console.log(error.message))
  }

  function votingChange (id, direction) {
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


  return (
    <main className='App'>
      <header>
        <h1>faule Tomaten</h1>
          <nav>
          {location.pathname !== '/' && (
            <Link to="/" onClick={() => setSelectedMovie(null)}>
              <img src={home} alt="Home button" />
            </Link>
          )}
          </nav>   
      </header>
      <Routes>
        <Route path="/" element={<MoviesContainer movies={movies} votingChange={votingChange} getMovieDetails={getMovieDetails} />} />
        <Route path="/:id" element={<MovieDetails movie={selectedMovie} />} />
      </Routes>
    </main>
  );
}

export default App;
