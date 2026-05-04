/* Componente Tools */
import skillsData from "../services/skillsData.json";

function Tools() {
  return (
    <section className="tools">
      {/* --- ELEMENTOS DE FONDO --- */}
      <div className="tools__ceiling"></div>
      <div className="dojo__side-structure"></div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="tools__content tools__content--katanas">
        <h2 className="tools__title">Herramientas</h2>

        <ul className="tools__list">
          {skillsData.map((skill, index) => (
            <li
              key={skill.id}
              className="tools__item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* CONTENEDOR CUADRO */}
              <div className="tools__frame">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="tools__icon"
                />
                <span className="tools__name">{skill.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* --- SUELO --- */}
      <div className="tools__wall"></div>
      <div className="tools__floor"></div>
    </section>
  );
}

export default Tools;
