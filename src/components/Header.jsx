import "../styles/App.scss";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header js_header">
      <div className="header__container">
        <img
          src="/sello.png"
          alt="Sello tradicional japonés con el nombre de Cristina"
          className="header__seal"
        />

        <h1 className="header__title">
          <Link to="/" className="header__title-link scroll">
            <span className="scroll__roller scroll__roller--left"></span>

            <span className="scroll__content">
              <span className="scroll__text">Semillas de Código</span>
            </span>

            <span className="scroll__roller scroll__roller--right"></span>
          </Link>
        </h1>

        <nav className="header__social">
          <a
            href="mailto:coletcristina@gmail.com"
            className="header__social-link"
          >
            <img src="/email.png" alt="Email" className="header__social-icon" />
          </a>

          <a
            href="https://github.com/colet-cristina"
            target="_blank"
            rel="noreferrer"
            className="header__social-link"
          >
            <img src="/git.png" alt="GitHub" className="header__social-icon" />
          </a>

          <a
            href="https://linkedin.com/in/cristina-colet-corredera/"
            target="_blank"
            rel="noreferrer"
            className="header__social-link"
          >
            <img src="/in.png" alt="LinkedIn" className="header__social-icon" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
