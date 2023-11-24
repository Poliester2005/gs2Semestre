import { } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Perfil from './components/Perfil'
import Tarefa from './components/Tarefa'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/tarefa" element={<Tarefa />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
