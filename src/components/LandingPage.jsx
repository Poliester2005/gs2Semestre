import {} from "react";
import { NavLink } from "react-router-dom";
import "./style/LandingPage.scss";
import logo from "../assets/logo.png";

export default function LandingPage() {
  return (
    <div>
      <header>
        <h1>Doce Desempenho</h1>
        <NavLink exact activeClassName="active" className="NavLink" to="/login">
          Login
        </NavLink>
      </header>
      <main>
        <div className="containerEsquerda">
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
          <article className="artigo">
            <h1>Titulo da solução</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus animi quasi quibusdam fugit vero debitis, iste
                repellat, voluptatum eius repellendus illo expedita nobis minus
                officia ipsam magnam distinctio eveniet quod?
              </p>
            </div>
          </article>
        </div>
        <aside className="containerDireita">
          <article className="itensDireita">
            <h3>test1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              quaerat aperiam laborum libero? Vero veritatis eaque magnam
              repellat nobis quos officia facere aliquid blanditiis praesentium
              dolor, voluptates, recusandae ex laborum!
            </p>
          </article>
          <article className="itensDireita">
            <h3>test2</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              quaerat aperiam laborum libero? Vero veritatis eaque magnam
              repellat nobis quos officia facere aliquid blanditiis praesentium
              dolor, voluptates, recusandae ex laborum!
            </p>
          </article>
          <article className="itensDireita">
            <h3>test3</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              quaerat aperiam laborum libero? Vero veritatis eaque magnam
              repellat nobis quos officia facere aliquid blanditiis praesentium
              dolor, voluptates, recusandae ex laborum!
            </p>
          </article>
        </aside>
      </main>
    </div>
  );
}
