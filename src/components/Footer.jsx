import "../styles/App.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer js_footer">
      <div className="footer__container">
        <p className="footer__copy">
          &copy; {currentYear} - Desarrollado por Cristina Colet
        </p>

        <div className="footer__social">
          <a
            href="https://github.com/colet-cristina"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
