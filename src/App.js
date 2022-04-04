import React from 'react'
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

//API KEY: ea15aa33

const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=ea15aa33';


function App() {

    const [movies, setMovies] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
         const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('SpiderMan');
    }, []);

  return (
        <div className='app'>
            <h1>Another Cuevana</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(event)=>setSearchTerm(event.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovie(searchTerm)}
                />
            
            </div>
          
            {
                movies?.length > 0 
                    ? (
                        <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                            ))}
                        </div>                      
                    ) : (
                        <div className='empty'>
                            <h2>No Movies Found</h2>
                  
                        </div>
                    
                    )
            }
        </div>         
  )
}

export default App