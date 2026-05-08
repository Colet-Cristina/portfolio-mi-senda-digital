/* --- ROOTS: Sección biográfica, evolución profesional*/
import torii from "../images/design/torii.png";
import dojo from "../images/design/dojo.png";

function Roots() {
  return (
    <section className="roots">
      <div className="roots__layers">
        <img src={torii} className="roots__layer roots__layer--torii" alt="" />
        <img src={dojo} className="roots__layer roots__layer--bridge" alt="" />
      </div>

      {/* Contenedor principal con imagen en CSS */}
      <div className="roots__container">
        <h2 className="roots__main-title">Raíces</h2>
        <p className="roots__title">Mi transición hacia el desarrollo web.</p>
      </div>

      <div className="roots__story">
        <p className="roots__text">
          Mi trayectoria profesional ha pasado por entornos muy distintos, pero
          todos me han dejado una lección importante. Aprendí a moverme en
          ritmos altos y a ser resolutiva, adaptándome a las necesidades del
          momento.
        </p>

        <p className="roots__text">
          También que las cosas bien hechas llevan su tiempo; que para que algo
          crezca hace falta paciencia, una base sólida y mucha atención al
          detalle.
        </p>

        <p className="roots__text roots__text--highlight">
          Cambié de rumbo para convertir mi curiosidad tecnológica en mi
          profesión. Tras mi formación en Adalab, busco aportar esa dedicación
          en proyectos reales, y seguir aprendiendo y evolucionando como
          desarrolladora.
        </p>
      </div>
    </section>
  );
}

export default Roots;
