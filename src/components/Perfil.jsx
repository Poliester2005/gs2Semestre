import { useState, useEffect } from "react";
import './style/perfil.scss'

export default function Perfil() {
    const idUsuario = 1;
    const [usuario, setUsuario] = useState({ tarefasDiaria1: 1 });


    const getData = () => {
        var variaveisAPI = {
            method: "GET",
        };

        fetch(`http://localhost:3000/usuarios/${idUsuario}`, variaveisAPI)
            .then((response) => response.json())
            .then((result) => setUsuario(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, [idUsuario]);


    function validacaoAtividade(index) {
        switch (index) {
            case 1:
                if (usuario.tarefasDiaria1 == 1) {
                    return <div className="cardTarefa">Tarefa 1</div>;
                } else {
                    return false;
                }
            case 2:
                if (usuario.tarefasDiaria2 == 1) {
                    return <div className="cardTarefa">Tarefa 2</div>;
                } else {
                    return false;
                }
            case 3:
                if (usuario.tarefasDiaria3 == 1) {
                    return <div className="cardTarefa">Tarefa 3</div>;
                } else {
                    return false;
                }
            case 4:
                if (usuario.tarefasMensal1 == 1) {
                    return <div className="cardTarefa">Tarefa 4</div>;
                } else {
                    return false;
                }
            case 5:
                if (usuario.tarefasMensal2 == 1) {
                    return <div className="cardTarefa">Tarefa 5</div>;
                } else {
                    return false;
                }
            default:
                break
        }
    }
    console.log(validacaoAtividade())
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
                            <progress id='xp' value={usuario.xp} max='50' className="progressBar"></progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Linha"></div>
            <div className="containerAtividades">
                {validacaoAtividade(1)}
                {validacaoAtividade(2)}
                {validacaoAtividade(3)}
                {validacaoAtividade(4)}
                {validacaoAtividade(5)}
            </div>
        </main >
    </>
}