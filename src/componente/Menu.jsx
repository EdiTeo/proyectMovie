import '../style/Menu.css'
import {Link} from 'react-router-dom'
export function  Menu(){
    const navigation = [
        {name:'Inicio',href:'/'},
        {name:'Películas',href:'/peliculas'},
        {name:'Series',href:'/series'},
        {name:'Géneros',href:'/generos'},
    ]
    return(
            <header>
                <nav className="nav-principal">
                    <div className="logo">
                          <Link to="/" className="titulo-principal">MoviTeo</Link>
                    </div>
                       <div className="direccion-lista"> 
                            <div className="contenido-nav">
                                {navigation.map(
                                    (item)=>(
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="lista"
                                        >
                                        {item.name}
                                        </Link>
                                    )
                                )}
                            </div>
                            <div className="iniciarsesion">
                                <button className="iniciar-sesion">
                                    Iniciar Sesión
                                </button>
                            </div>
                       </div>
                    
                </nav>
            </header>
    );
}
