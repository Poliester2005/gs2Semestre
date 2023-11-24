import { NavLink } from "react";
import './style/home.scss'
import logo from '../assets/logo.png'

export default function LandingPage() {

    return <>
        <header>
            <h1>Doce Desempenho</h1>
            <NavLink exact activeClassName="active" className="NavLink" to="/login">
                Poggers
            </NavLink>
        </header>
        <main>
            <figure>
                <img src={logo}/>
            </figure>
            <div>

            </div>
            <aside>
                <article>

                </article>
                <article>

                </article>
                <article>

                </article>
            </aside>
        </main>
        <footer>

        </footer>
    </>
}