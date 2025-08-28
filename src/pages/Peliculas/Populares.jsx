
import { useEffect, useState } from "react";
import { getPopularMovies } from "../../services/movies";
import './Populares.css';
export function PelisPopulares(){

  const [movies, setMovies] = useState([]);
    useEffect(() => {
      getPopularMovies().then(setMovies);
    }, []);
    
  return(
    <div className="popular">
      <h1 className="popular-principal">Peliculas Populares</h1>
      <div>  
        {movies.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          movies.map(movie => (
            <div key={movie.id} className="popular-contenido">
              <h2 className="popular-titulo">
                {movie.title}
              </h2>
              <img className='popular-imagen'src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>)
          ))
        }
      </div>
    </div>
  );
}