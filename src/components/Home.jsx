import { useState, useEffect } from "react";
import './style/home.scss'
import logo from '../assets/logo.png'


export default function Home() {
    const idUsuario = 1;
    const [usuario, setUsuario] = useState({});


    const getData = () => {
        var variaveisAPI = {
            method: "GET",
        };

        fetch(`http://localhost:3030/usuarios/${idUsuario}`, variaveisAPI)
            .then((response) => response.json())
            .then((result) => setUsuario(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);
    return <>
        <div className='containerHome'>
            <div className='containerLogo'>
                <img src={logo} alt="" />
            </div>
            <div className='containerRanking'>
                <h1>Top 3 pessoas com maior nivel</h1>
                <div className='containerPodium'>
                    <div className='podium segundo'>2° Lugar</div>
                    <div className='podium primeiro'>1° Lugar</div>
                    <div className='podium terceiro'>3° Lugar</div>
                </div>
                <div className='containerRankingPessoal'>
                    <p>Sua posição é: 5°</p>
                    <p>Seu nome é: {usuario.nome}</p>
                </div>
            </div>
        </div>
    </>
}