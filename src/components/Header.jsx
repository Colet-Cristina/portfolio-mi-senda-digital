/**
 * Componente Header
 * Gestiona la identidad visual superior, el título principal
 * y los accesos directos a redes sociales/contacto.
 */

import { Link } from "react-router";

function Header() {
  return (
    <header className="header js_header">
      <div className="header__container">
        {/* Identidad visual: Sello personal estilo hanko japonés */}
        <img
          src="/sello.png"
          alt="Sello personal estilo Hanko japonés en color rojo con el nombre de Cristina en caracteres Katakana"
          className="header__seal"
        />

        {/* Título dinámico: Implementa el efecto visual de un pergamino (scroll) */}
        <h2 className="header__title">
          <Link to="/" className="header__title-link scroll">
            {/* Elementos decorativos del pergamino */}
            <span className="scroll__roller scroll__roller--left"></span>

            <span className="scroll__content">
              <span className="scroll__text">Semillas de Código</span>
            </span>

            <span className="scroll__roller scroll__roller--right"></span>
          </Link>
        </h2>

        {/* Navegación social: Enlaces externos y contacto directo */}
        <nav className="header__social">
          {/* Contacto, Email */}
          <a
            href="mailto:coletcristina@gmail.com"
            className="header__social-link"
          >
            <img src="/email.png" alt="Email" className="header__social-icon" />
          </a>

          {/* Acceso a GitHub */}
          <a
            href="https://github.com/colet-cristina"
            target="_blank"
            rel="noopener noreferrer"
            className="header__social-link"
          >
            <img src="/git.png" alt="GitHub" className="header__social-icon" />
          </a>

          {/* Acceso a LinkedIn */}
          <a
            href="https://linkedin.com/in/cristina-colet-corredera/"
            target="_blank"
            rel="noopener noreferrer"
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
