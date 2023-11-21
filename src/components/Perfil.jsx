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
        <main className='containerPerfil'>
            <div className="containerDados">
                <div className="containerImg">
                    <figure className="imageResizer">
                        <img src={usuario.img} alt="" className="perfilImg" />
                    </figure>
                    <div className="details">
                        <h2>{usuario.nome}</h2>
                        <p>Nível: {usuario.nivel}</p>
                        <div className="perfilNivel">
                            <label htmlFor='xp'>XP</label>
                            <progress id='xp' value='25' max='50' className="progressBar"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    </>
}