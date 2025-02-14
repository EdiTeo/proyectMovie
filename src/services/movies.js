import axios from "axios";

const API_KEY = "8ee83c8da179fc29d83ec5c079d4fcf2";
const BASE_URL = "https://api.themoviedb.org/3";
export async function getPopularMovies(){
    const resultado = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
    return resultado.data.results;
}