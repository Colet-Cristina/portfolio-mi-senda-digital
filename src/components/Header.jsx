import "../styles/App.scss";

function Header() {
  return (
    <header className="header js_header">
      <div className="header__container">
        <h1 className="header__title">Mi Senda Digital</h1>

        <nav className="header__nav js_menu">
          <ul className="header__list">
            <li className="header__item">
              <a href="#about" className="header__link">
                Raíces
              </a>
            </li>
            <li className="header__item">
              <a href="#projects" className="header__link">
                Herbolario
              </a>
            </li>
            <li className="header__item">
              <a href="#arsenal" className="header__link">
                Arsenal
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
