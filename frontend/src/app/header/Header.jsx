/* eslint-disable react/prop-types */ 
// Desactiva la advertencia de ESLint sobre props no definidas explícitamente con PropTypes.

/* Importa el archivo de estilos CSS para aplicar estilos al componente */
import "./Header.css"; 

// Definición del componente Header, que recibe la función `changeIndex` como prop.
const Header = ({ changeIndex }) => {
    return (
        <div className="contenedor-header"> 
            {/* Título principal del header */}
            <h1>PROGRESA FILMS</h1>

            {/* Contenedor para los botones de navegación */}
            <div>
                {/* Botón para cambiar al directorio de películas */}
                <button onClick={() => changeIndex(0)}>Directorio</button>
                {/* Botón para cambiar a la vista de agregar película */}
                <button onClick={() => changeIndex(1)}>Agregar película</button>
            </div>
        </div>
    );
};

// Exporta el componente para poder usarlo en otros archivos.
export default Header;
