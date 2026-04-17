import skillsData from "../services/skillsData.json";

function Arsenal() {
  return (
    <section className="arsenal">
      <h2 className="arsenal__title">Mi Arsenal</h2>
      <ul className="arsenal__list">
        {skillsData.map((skill, index) => (
          <li
            key={skill.id}
            className={`arsenal__item arsenal__item--${skill.color}`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <i className={`${skill.icon} arsenal__icon`}></i>
            <span className="arsenal__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Arsenal;
