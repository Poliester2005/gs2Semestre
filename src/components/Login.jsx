import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/home.scss";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const usenavigate = useNavigate();

  const passarLogin = (e) => {
    var variaveisAPI = {
      method: "GET",
    };

    e.preventDefault();
    if (validacao()) {
      fetch(`http://localhost:3000/usuarios?email=${email}`, variaveisAPI)
        .then((response) => response.json())
        .then((resultado) => {
          console.log(resultado);
          if (Object.keys(resultado).length === 0) {
            alert("Usuário não encontrado");
          } else {
            if (resultado[0].senha === senha) {
              usenavigate("/home");
            } else {
              alert("Senha incorreta");
            }
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const validacao = () => {
    let resultado = true;
    if (email == "" || email == null) {
      resultado = false;
      window.alert("Insira todos os dados");
    }
    if (senha == "" || senha == null) {
      resultado = false;
      alert("Insira todos os dados");
    }
    return resultado;
  };
  return (
    <>
      <main>
        <form onSubmit={passarLogin}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input type="submit" />
        </form>
      </main>
    </>
  );
}
