/* --- HEADER: Título principal, accesos  a redes sociales/contacto. */

import { useState } from "react";
import { Link, useLocation } from "react-router";

import selloHanko from "../../images/design/sello.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header ">
      <div className="header__container">
        {/* Identidad visual: Sello personal estilo hanko japonés */}
        <img
          src={selloHanko}
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
        {/* Navegación condicional */}
        {!isHome && (
          <>
            {/* Botón Hamburguesa */}
            <button
              className={`header__menu-btn ${isOpen ? "is-open" : ""}`}
              onClick={toggleMenu}
            >
              <span className="header__menu-bar"></span>
              <span className="header__menu-bar"></span>
              <span className="header__menu-bar"></span>
            </button>

            {/* Navegación */}
            <nav className={`header__nav ${isOpen ? "is-active" : ""}`}>
              <ul className="header__list">
                {/* El enlace a Inicio solo sale si NO estamos en la Home */}
                {!isHome && (
                  <li className="header__item">
                    <Link
                      to="/"
                      className="header__nav-item"
                      onClick={closeMenu}
                    >
                      Inicio
                    </Link>
                  </li>
                )}

                {/* El enlace a Raíces solo sale si NO estamos en /raices */}
                {location.pathname !== "/raices" && (
                  <li className="header__item">
                    <Link
                      to="/raices"
                      className="header__nav-item"
                      onClick={closeMenu}
                    >
                      Raíces
                    </Link>
                  </li>
                )}

                {/* El enlace a Jardín solo sale si NO estamos en /jardin-de-codigo */}
                {location.pathname !== "/jardin-de-codigo" && (
                  <li className="header__item">
                    <Link
                      to="/jardin-de-codigo"
                      className="header__nav-item"
                      onClick={closeMenu}
                    >
                      Jardín
                    </Link>
                  </li>
                )}

                {/* El enlace a Herramientas solo sale si NO estamos en /herramientas */}
                {location.pathname !== "/herramientas" && (
                  <li className="header__item">
                    <Link
                      to="/herramientas"
                      className="header__nav-item"
                      onClick={closeMenu}
                    >
                      Herramientas
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
