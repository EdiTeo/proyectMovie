
import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies";

export function PelisPopulares(){
const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);
  return(
    <div>
      <h1>Peliculas Populares</h1>
      <div>
        {movies.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          movies.map(movie => (
            <div key={movie.id}>
              <h2>
                {movie.title}
              </h2>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>)
          ))
        }
      </div>
    </div>
  );
}