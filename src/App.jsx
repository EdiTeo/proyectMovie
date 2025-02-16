
import { PelisPopulares } from "./polulares/Populares";
import { Menu } from "./componente/menu";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//const Home = () => <h2 className="text-center mt-10 text-2xl">Bienvenido a MovisTeo</h2>;

export default function App(){
  return (
    <>
      <Menu />
      <PelisPopulares/>
    </>

  );
}