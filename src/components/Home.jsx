import { } from 'react'
import './style/home.scss'
import logo from '../assets/logo.png'


export default function Home() {
    return <>
        <div className='containerHome'>
            <div className='containerLogo'>
                <img src={logo} alt="" />
            </div>
        </div>
    </>
}