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
          <Link to="/" className="header__link">
            Mi Senda Digital
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
