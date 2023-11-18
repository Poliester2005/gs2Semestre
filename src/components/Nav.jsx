import { } from 'react';
import './style/nav.scss'
import { NavLink } from 'react-router-dom';

import config from '../assets/config.png'
import home from '../assets/home.png'
import perfil from '../assets/perfil.png'
import task from '../assets/task.png'
import logo from '../assets/logo.png'

export default function Nav() {

    return <>
        <div className='navBar'>
            <div className='containerLogo'>
                <img src={logo} alt="" />
                <h4>Doce</h4>
                <h4>Desempenho</h4>
            </div>
            <div className='containerLink'>
                <div className='home'>
                    <img src={home} alt="" />
                    <NavLink exact activeClassName="active" className="NavLink" to="/">
                        Home
                    </NavLink>
                </div>
                <div className='perfil'>
                    <img src={perfil} alt="" />
                    <NavLink activeClassName="active" className="NavLink" to="/perfil">Perfil</NavLink>
                </div>
                <div className='tarefa'>
                    <img src={task} alt="" />
                    <NavLink activeClassName="active" className="NavLink" to="/tarefa">Tarefas</NavLink>
                </div>
            </div>
            <div className='containerConfig'>
                <div className='config'>
                    <img src={config} alt="" />
                    <NavLink activeClassName="active" className="NavLink" to="/config">Configurações</NavLink>
                </div>
            </div>
        </div>

    </>
}