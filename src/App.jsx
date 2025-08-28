
import { PelisPopulares } from "./pages/Peliculas/Populares";
import { Menu } from "./componente/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Generos} from './pages/Generos/Generos'
import { Peliculas } from "./pages/Peliculas/Peliculas";
import { Inicio } from "./pages/Inicio/Inicio";
import {Series} from "./pages/Series/Series"
export default function App(){
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/generos" element={<Generos/>}/>
        <Route path="/peliculas" element={< Peliculas/>}/>
        <Route path="/series" element={<Series/>}/>
        
      </Routes>
    </Router>

  );
}