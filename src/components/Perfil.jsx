import { useState, useEffect } from "react";
import './style/perfil.scss'

export default function Perfil() {
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
    }, [idUsuario]);
    return <>
        <div className='containerPerfil'>
            <img src={usuario.img} alt="" />
            <h3>{usuario.nome}</h3>
        </div>
    </>
}