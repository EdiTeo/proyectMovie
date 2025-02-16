export function  Menu(){
    return(
            <>
                <nav className="bg-gray-900 text-white p-4">
                    <div className="container mx-auto flex justify-between">
                        <h1 className="text-xl font-bold">MoviTeo</h1>
                        <ul className="flex gap-4">
                            <li> Inicio </li>
                            <li>Peliculas</li>
                            <li>Series</li>
                            <li>Generos</li>
                        </ul>
                    </div>

                </nav>
            </>
    );
}
