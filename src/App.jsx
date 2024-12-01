import React from 'react'
import Sobrenos from './componentes/Sobrenos/Sobrenos.jsx'
import Navbar from './componentes/Navbar/Navbar.jsx'
import Habilidades from './componentes/habilidades/Habilidades.jsx'
import Home from './componentes/Home/Home.jsx';
import Contrateme from './componentes/Contrateme/Contrateme.jsx'
import './App.css'
import Projetos from './componentes/Projetos/Projetos.jsx';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Habilidades />
      <Sobrenos />
      <Projetos/>
      <Contrateme/>
    
    </>
  )
}

export default App
