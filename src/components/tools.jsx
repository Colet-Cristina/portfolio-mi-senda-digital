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
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <i className={`${skill.icon} tools__icon`}></i>
            <span className="tools__name">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tools;
