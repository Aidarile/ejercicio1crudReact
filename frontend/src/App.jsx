
import { useState } from 'react'
import './App.css'
import Header from './app/header/Header';
import ListaPeliculas from './app/listaPeliculas/ListaPeliculas';
import AgregarPelicula from './app/agregarPelicula/AgregarPelicula.';
import PeliculaDetalle from './app/peliculaDetalle/PeliculaDetalle';

function App() {
  const [index, setIndex] = useState(0);
  const [detalle, setDetalle] = useState();

  const changeIndex = (ind) => {
    setIndex(ind);
  };

  const setPeliculaDetalle = (pelicula) => {
    setDetalle(pelicula)
    setIndex(2)
  }
  if (index === 2) {
    return( 
      <>
      <Header changeIndex={changeIndex}/>
      <PeliculaDetalle pelicula={detalle} setIndex={setIndex}/>
      </>
    )
  };

  console.log(index)

  if (index === 1) {

    return(
      <>
      <Header changeIndex={changeIndex}>
        
  </Header>
      <AgregarPelicula/>

    </>
    );
  }

  return (
    <>
      <Header changeIndex={changeIndex}>
        
      </Header>
      <ListaPeliculas peliculaDetalle={setPeliculaDetalle} />

    </>
  );
}

export default App
