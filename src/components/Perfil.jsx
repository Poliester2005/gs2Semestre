import { useState, useEffect } from "react";
import "./style/perfil.scss";
import Nav from "./Nav";

export default function Perfil() {
  const idUsuario = 1;
  const [usuario, setUsuario] = useState([]);
  const [tarefas, setTarefas] = useState([]);

  const getTarefas = () => {
    var variaveisAPI = {
      method: "GET",
    };

    fetch(`http://localhost:3000/tarefas`, variaveisAPI)
      .then((response) => response.json())
      .then((resultado) => setTarefas(resultado))
      .catch((error) => console.log("error", error));
  };

  console.log(tarefas);

  const getUsuario = () => {
    var variaveisAPI = {
      method: "GET",
    };

    fetch(`http://localhost:3000/usuarios/${idUsuario}`, variaveisAPI)
      .then((response) => response.json())
      .then((result) => setUsuario(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUsuario();
    getTarefas();
  }, [idUsuario]);

  function validacaoAtividade(index) {
    switch (index) {
      case 1:
        if (usuario.tarefasDiaria1 == 1) {
          return (
            <>
              <div className="cardTarefa">
                <h1>{tarefas[0]?.titulo}</h1>
                <p>{tarefas[0]?.descricao}</p>
              </div>
            </>
          );
        } else {
          return false;
        }
      case 2:
        if (usuario.tarefasDiaria2 == 1) {
          return (
            <>
              <div className="cardTarefa">
                <h1>{tarefas[1]?.titulo}</h1>
                <p>{tarefas[1]?.descricao}</p>
              </div>
            </>
          );
        } else {
          return false;
        }
      case 3:
        if (usuario.tarefasDiaria3 == 1) {
          return (
            <>
              <div className="cardTarefa">
                <h1>{tarefas[2]?.titulo}</h1>
                <p>{tarefas[2]?.descricao}</p>
              </div>
            </>
          );
        } else {
          return false;
        }
      case 4:
        if (usuario.tarefasMensal1 == 1) {
          return (
            <>
              <div className="cardTarefa">
                <h1>{tarefas[3]?.titulo}</h1>
                <p>{tarefas[3]?.descricao}</p>
              </div>
            </>
          );
        } else {
          return false;
        }
      case 5:
        if (usuario.tarefasMensal2 == 1) {
          return (
            <>
              <div className="cardTarefa">
                <h1>{tarefas[4]?.titulo}</h1>
                <p>{tarefas[4]?.descricao}</p>
              </div>
            </>
          );
        } else {
          return false;
        }
      default:
        break;
    }
  }
  console.log(validacaoAtividade());
  return (
    <>
      <Nav />
      <main className="containerPerfil">
        <div className="containerDados">
          <div className="containerImg">
            <figure className="imageResizer">
              <img src={usuario.img} alt="" className="perfilImg" />
            </figure>
            <div className="details">
              <h2>{usuario.nome}</h2>
              <p>Nível: {usuario.nivel}</p>
              <div className="perfilNivel">
                <label htmlFor="xp">XP</label>
                <progress
                  id="xp"
                  value={usuario.xp}
                  max="50"
                  className="progressBar"
                ></progress>
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
      </main>
    </>
  );
}
