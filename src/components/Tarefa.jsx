import { useState, useEffect } from 'react';
import './style/tarefa.scss';

export default function Tarefa() {
  const idUsuario = 1;
  const [usuario, setUsuario] = useState({});

  const getData = () => {
    var variaveisAPI = {
      method: 'GET',
    };

    fetch(`http://localhost:3000/usuarios/${idUsuario}`, variaveisAPI)
      .then((response) => response.json())
      .then((result) => setUsuario(result))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    getData();
  }, [idUsuario]);

  const handleAtualizarTarefas = async (indice) => {
    try {
      let usuarioAtualizado = {
        ...usuario,
      };

      switch (indice) {
        case 0:
          if (usuarioAtualizado.tarefasDiaria1 == 1) {
            usuarioAtualizado.tarefasDiaria1 = 0;
          } else {
            usuarioAtualizado.tarefasDiaria1 = 1;
          }
          break;
        case 1:
          if (usuarioAtualizado.tarefasDiaria2 == 1) {
            usuarioAtualizado.tarefasDiaria2 = 0;
          } else {
            usuarioAtualizado.tarefasDiaria2 = 1;
          }
          break;
        case 2:
          if (usuarioAtualizado.tarefasDiaria3 == 1) {
            usuarioAtualizado.tarefasDiaria3 = 0;
          } else {
            usuarioAtualizado.tarefasDiaria3 = 1;
          }
          break;
        case 3:
          if (usuarioAtualizado.tarefasMensal1 == 1) {
            usuarioAtualizado.tarefasMensal1 = 0;
          } else {
            usuarioAtualizado.tarefasMensal1 = 1;
          }
          break;
        case 4:
          if (usuarioAtualizado.tarefasMensal2 == 1) {
            usuarioAtualizado.tarefasMensal2 = 0;
          } else {
            usuarioAtualizado.tarefasMensal2 = 1;
          }
          break;
        default:
          break;
      }

      const resposta = await fetch(`http://localhost:3000/usuarios/${idUsuario}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(usuarioAtualizado),
      });

      if (!resposta.ok) {
        throw new Error('Erro ao atualizar dados');
      }

      // Atualiza o estado local após a atualização bem-sucedida
      setUsuario(usuarioAtualizado);
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

          <button onClick={() => handleAtualizarTarefas(0)}>Terminei essa tarefa</button>
        </div>
        <div className="containerTarefaMensais">
          <h2>Tarefa 1</h2>
          <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

          <button onClick={() => handleAtualizarTarefas(1)}>Terminei essa tarefa</button>
        </div>
      </section>
      <section className='containerTarefasDiariasAll'>
        <div className="containerTarefaDiarias">
          <h2>Tarefa 1</h2>
          <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

          <button onClick={() => handleAtualizarTarefas(2)}>Terminei essa tarefa</button>
        </div>
        <div className="containerTarefaDiarias">
          <h2>Tarefa 2</h2>
          <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

          <button onClick={() => handleAtualizarTarefas(3)}>Terminei essa tarefa</button>
        </div>
        <div className="containerTarefaDiarias">
          <h2>Tarefa 3</h2>
          <div className='containerText'><p>teste tste teste testetetetetetetet</p></div>

          <button onClick={() => handleAtualizarTarefas(4)}>Terminei essa tarefa</button>
        </div>
      </section>
    </main >
  </>
}