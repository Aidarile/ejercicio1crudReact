
import { useState } from 'react'
import './App.css'
import Header from './app/header/Header';
import ListaPeliculas from './app/listaPeliculas/ListaPeliculas';

function App() {
  const [index, setIndex] = useState(0);

  const changeIndex = (ind) => {
    setIndex(ind);
  }

  console.log(index)

  if (index === 1) {

    return(
      <>
      <Header changeIndex={changeIndex}>
        
      </Header>
      <h1>Agregar pelicula</h1>

    </>
    );
  }

  return (
    <>
      <Header changeIndex={changeIndex}>
        
      </Header>
      <ListaPeliculas/>

    </>
  );
}

export default App
