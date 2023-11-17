import { } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Perfil from './components/Perfil'
import Tarefa from './components/Tarefa'
import Nav from './components/Nav'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/tarefa" element={<Tarefa />} />
      </Routes>
    </>
  )
}

export default App
