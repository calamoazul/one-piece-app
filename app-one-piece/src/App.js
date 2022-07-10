import './App.css';
import React, {useEffect, useState} from 'react';
import Logo from './components/logo';
import GifTemplate from './components/group-of-gifs';
import {Link, Route, useLocation} from "wouter"



 function App() {
  const [keyword, setKeyword] = useState()
  const [path, pushLocation] = useLocation()
  const busqueda = e => {
    e.preventDefault()
    pushLocation('/gif/' + keyword)
  }
  const resultadosBusqueda = e => {
    setKeyword(e.target.value)
  }
    return (
      <div className="App">
        <Logo/>
        <section className="App-Heading">
            <form onSubmit={busqueda}>
            <label for="search">Busca tu gif favorito</label>
            <p>Por ahora, puedes buscar gifs que no sean de One Piece</p>
            <input onChange={resultadosBusqueda} type="text" value={keyword} name="search" />
            </form>
        </section>
        <section className="App-content">
          <Route 
           component ={GifTemplate}
           path="/gif/:keyword" 
          />
        </section>
      </div>
    );
}

export default App;
