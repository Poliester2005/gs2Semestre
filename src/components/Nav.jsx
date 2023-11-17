import { } from 'react'
import './style/nav.scss'
import { NavLink } from 'react-router-dom';

import config from '../assets/config.png'
import logo from '../assets/logo.png'

export default function Nav() {
    return <>
        <div className='navBar'>
            <div className='containerLogo'>
                <img src={logo} alt="" />
            </div>
            <div className='containerLink'>
                <div className='home'>
                    <img src="https://picsum.photos/25" alt="" />
                    <NavLink exact activeClassName="active" className="NavLink" to="/">
                        Home
                    </NavLink>
                </div>
                <div className='perfil'>
                    <img src="https://picsum.photos/25" alt="" />
                    <NavLink activeClassName="active" className="NavLink" to="/perfil">Perfil</NavLink>
                </div>
                <div className='tarefa'>
                    <img src="https://picsum.photos/25" alt="" />
                    <NavLink activeClassName="active" className="NavLink" to="/tarefa">Tarefas</NavLink>
                </div>
            </div>
            <div className='containerConfig'>
                <div className='config'>
                    <img src={config} alt="" width='10%' />
                    <NavLink activeClassName="active" className="NavLink" to="/config">Configurações</NavLink>
                </div>
            </div>
        </div>
    </>
}