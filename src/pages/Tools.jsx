/* Componente Tools */
import skillsData from "../services/skillsData.json";

function Tools() {
  return (
    <section className="tools">
      <h2 className="tools__title">Mi tools</h2>
      <ul className="tools__list">
        {skillsData.map((skill, index) => (
          <li
            key={skill.id}
            className={`tools__item tools__item--${skill.color}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* El cordel del cuadro */}
            <span className="tools__hook"></span>

            {/* Contenedor cuadro */}
            <div className="tools__frame">
              <img src={skill.icon} alt={skill.name} className="tools__icon" />
              <span className="tools__name">{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tools;
