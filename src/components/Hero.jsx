import { Link } from "react-router";
function Hero() {
  return (
    <section id="about" className="hero js_hero">
      <div className="hero__content">
        <h3 className="hero__greeting">Bienvenida a mi dojo digital</h3>
        <h2 className="hero__name">Soy Cristina Colet</h2>
        <p className="hero__description">
          Inspirada en la calma de un jardín Zen, me esfuerzo por escribir
          código limpio y ordenado, basándome en la disciplina y el aprendizaje
          de una onna-musha; un camino que inicié en Adalab y que sigo
          recorriendo cada día.
        </p>

        <nav className="hero__nav js_menu">
          <ul className="hero__list">
            <li className="hero__item">
              <Link
                to="/"
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
                to="/tools"
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
