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
      </div>
    </header>
  );
}

export default Header;
