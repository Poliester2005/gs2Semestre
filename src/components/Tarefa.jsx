import { useState, useEffect } from 'react'
import './style/tarefa.scss'


export default function Tarefa() {
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

    const handleAtualizarTarefas = async (valor, indice) => {
        try {
            var usuarioAtualizado = { ...usuario };
            switch (indice) {
                case 0:
                    usuarioAtualizado.tarefasDiaria1 = valor;
                    break
                case 1:
                    usuarioAtualizado.tarefasDiaria2 = valor;
                    break
                case 2:
                    usuarioAtualizado.tarefasDiaria3 = valor;
                    break
                case 3:
                    usuarioAtualizado.tarefasMensal1 = valor;
                    break
                case 4:
                    usuarioAtualizado.tarefasMensal2 = valor;
                    break
            }

            const resposta = await fetch(`http://localhost:3030/usuarios`, {
                method: 'POST',
                body: JSON.stringify({usuarioAtualizado}),
            });

            if (!resposta.ok) {
                throw new Error('Erro ao atualizar dados');
            }
        } catch (erro) {
            console.error('Erro:', erro.message);
        }
    };
    return <>
        <main className='containerTarefa'>
            <section className='containerTarefasMensaisAll'>
                <div className="containerTarefaMensais">
                    <h2>Tarefa 1</h2>
                    <div className='containerText'><p>teste tste teste testetetetetetetet{usuario.nome}</p></div>

                    <button onClick={() => handleAtualizarTarefas(1, 0)}>Terminei essa tarefa</button>
                </div>
                <div className="containerTarefaMensais">
                    <h2>Tarefa 1</h2>
                    <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

                    <button onClick={() => handleAtualizarTarefas(1, 1)}>Terminei essa tarefa</button>
                </div>
            </section>
            <section className='containerTarefasDiariasAll'>
                <div className="containerTarefaDiarias">
                    <h2>Tarefa 1</h2>
                    <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

                    <button onClick={() => handleAtualizarTarefas(1, 2)}>Terminei essa tarefa</button>
                </div>
                <div className="containerTarefaDiarias">
                    <h2>Tarefa 2</h2>
                    <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

                    <button onClick={() => handleAtualizarTarefas(1, 3)}>Terminei essa tarefa</button>
                </div>
                <div className="containerTarefaDiarias">
                    <h2>Tarefa 3</h2>
                    <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

                    <button onClick={() => handleAtualizarTarefas(1, 4)}>Terminei essa tarefa</button>
                </div>
            </section>
        </main >
    </>
}