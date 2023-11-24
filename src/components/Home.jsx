import { useState, useEffect } from "react";
import "./style/home.scss";
import logo from "../assets/logo.png";
import Nav from "./Nav";

export default function Home() {
  const idUsuario = 1;
  const [usuario, setUsuario] = useState({});
  const [rank, setRank] = useState({});

  const getRank = () => {
    var variaveisAPI = {
      method: "GET",
    };

    fetch(
      `http://localhost:3000/usuarios?_sort=nivel&_order=desc`,
      variaveisAPI
    )
      .then((response) => response.json())
      .then((result) => setRank(result))
      .catch((error) => console.log("error", error));
  };

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
    getRank();
    getUsuario();
  }, []);
  return (
    <>
      <Nav />
      <main className="containerHome">
        <header className="containerLogo">
          <img src={logo} alt="" />
        </header>
        <article className="containerRanking">
          <h1>Top 3 pessoas com maior nivel</h1>
          <div className="containerPodium">
            <div className="podium segundo">
              2° Lugar <p>{rank[1]?.nome || "N/A"}</p>
            </div>
            <div className="podium primeiro">
              1° Lugar <p>{rank[0]?.nome || "N/A"}</p>
            </div>
            <div className="podium terceiro">
              3° Lugar <p>{rank[2]?.nome || "N/A"}</p>
            </div>
          </div>
          <div className="containerRankingPessoal">
            <p>Sua posição é: 5°</p>
            <p>Seu nome é: {usuario.nome}</p>
          </div>
        </article>
      </main>
    </>
  );
}
