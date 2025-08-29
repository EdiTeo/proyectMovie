import { useEffect, useState } from "react";
import { getSeriesPopulares } from "../../services/movies";
import './series.css'

export function Series(){
    const [series, setSeries] = useState([]);
    useEffect(
        ()=>{
            getSeriesPopulares().then(setSeries);
        },[]
    )
    return(
        <div className="series">
            <h1 className="titulo-principal-serie">Series Populares</h1>
            {
                series.length===0?(
                    <p>Esta cargando...</p>
                ):(
                    series.map(serie=>(
                        <div key={serie.id} className="contenido-serie">
                            <h2 className="titulo-serie">
                                {serie.name}
                            </h2>
                            <img className="imagen-serie-popular" src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
                        </div>
                    ))
                )
            }
        </div>
    )
}
