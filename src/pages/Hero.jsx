/* --- HERO: Incluye el menú de navegación principal hacia las diferentes secciones del "jardín" --- */

import { Link } from "react-router";

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          {/* Información personal y título */}
          <h1 className="hero__name">Cristina Colet</h1>

          {/* Navegación social: Enlaces externos y contacto directo */}
          <nav className="hero__social">
            {/* Contacto, Email */}
            <a
              href="mailto:coletcristina@gmail.com"
              className="hero__social-item"
            >
              <img src="/email.png" alt="Email" className="hero__social-icon" />
            </a>

            {/* Acceso a GitHub */}
            <a
              href="https://github.com/colet-cristina"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-item"
            >
              <img src="/git.png" alt="GitHub" className="hero__social-icon" />
            </a>

            {/* Acceso a LinkedIn */}
            <a
              href="https://linkedin.com/in/cristina-colet-corredera/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-item"
            >
              <img src="/in.png" alt="LinkedIn" className="hero__social-icon" />
            </a>
          </nav>

          <h3 className="hero__greeting">Bienvenida a mi dojo digital</h3>

          {/* Filosofía de desarrollo */}
          <p className="hero__description">
            Inspirada en la calma de un jardín Zen, me esfuerzo por escribir
            código limpio y ordenado, basándome en la disciplina y el
            aprendizaje de una onna-musha; un camino que inicié en Adalab y que
            sigo recorriendo cada día.
          </p>
        </div>

        {/* Navegación principal: Enlaces internos */}
        <nav className="hero__nav">
          <ul className="hero__list">
            <li className="hero__item">
              <Link
                to="/raices"
                className="hero__link hero__link--roots"
                aria-label="Sobre mí: mis raíces"
              >
                Raíces
              </Link>
            </li>

            <li className="hero__item">
              <Link
                to="/jardin-de-codigo"
                className="hero__link hero__link--garden"
                aria-label="Mis proyectos: jardín de código"
              >
                Jardín de Código
              </Link>
            </li>

            <li className="hero__item">
              <Link
                to="/herramientas"
                className="hero__link hero__link--tools"
                aria-label="Mis tecnologías y herramientas de desarrollo"
              >
                Herramientas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Hero;
