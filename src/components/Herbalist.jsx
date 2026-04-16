import projectsData from "../services/projectsData.json";

function Herbalist() {
  return (
    <section id="projects" className="herbalist js_herbalist">
      <h2 className="herbalist__title">Mi Herbolario</h2>
      <p className="herbalist__subtitle">
        Selección de proyectos cultivados con código
      </p>

      <ul className="herbalist__list">
        {projectsData.map((project) => (
          <li key={project.id} className="herbalist__item">
            <article className="project-card">
              <div className="project-card__img-container">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="project-card__img"
                />
              </div>

              <div className="project-card__content">
                <h3 className="project-card__name">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__tech-list">
                  {project.tech.map((skill, index) => (
                    <span key={index} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="project-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explorar Código
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Herbalist;
