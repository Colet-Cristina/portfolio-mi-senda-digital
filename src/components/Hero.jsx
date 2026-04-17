import { Link } from "react-router";
function Hero() {
  return (
    <section id="about" className="hero js_hero">
      <div className="hero__content">
        <h2 className="hero__greeting">Bienvenida a mi dojo digital</h2>
        <h3 className="hero__name">Soy Cristina Colet.</h3>
        <p className="hero__description">
          Al igual que en un jardín Zen, busco un código limpio, el orden y el
          crecimiento constante. Aquí podrás ver cómo cultivo soluciones
          digitales tras mi paso por Adalab.
        </p>

        <nav className="hero__nav js_menu">
          <ul className="hero__list">
            <li className="hero__item">
              <Link to="/" className="hero__link">
                Raíces
              </Link>
            </li>
            <li className="hero__item">
              <Link to="/jardin-de-codigo" className="hero__link">
                Jardín de Código
              </Link>
            </li>
            <li className="hero__item">
              <Link to="/arsenal" className="hero__link">
                Arsenal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Hero;
