import "../styles/App.scss";
import { Link } from "react-router";

function Header() {
  return (
    <header className="header js_header">
      <div className="header__container">
        <h1 className="header__title">
          <Link to="/" className="header__title-link">
            Mi Senda Digital
          </Link>
        </h1>

        <nav className="header__nav js_menu">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/" className="header__link">
                Raíces
              </Link>
            </li>
            <li className="header__item">
              <Link to="//jardin-de-codigo" className="header__link">
                Jardín de Código
              </Link>
            </li>
            <li className="header__item">
              <Link to="/arsenal" className="header__link">
                Arsenal
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
