import projectsData from "../services/projectsData.json";

/**
 * Componente GardenCode
 * Muestra una lista de proyectos dinámicos cargados desde un servicio local.
 */
function GardenCode() {
  return (
    <section id="projects" className="garden js_garden">
      {/* Elementos decorativos de la interfaz (Sakura) */}
      <div className="sakura-branch"></div>
      <div className="falling-petals">
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
      </div>

      {/* Encabezado de la sección */}
      <h2 className="garden__title">El Jardín</h2>
      <p className="garden__subtitle">Proyectos cultivados con código</p>

      {/* Listado de proyectos */}
      <ul className="garden__list">
        {projectsData.map((project) => (
          <li key={project.id} className="garden__item">
            <article className="project-card">
              {/* Imagen del proyecto */}
              <div className="project-card__img-container">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="project-card__img"
                />
              </div>

              {/* Información y detalles del proyecto */}
              <div className="project-card__content">
                <h3 className="project-card__name">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Tecnologías utilizadas: Mapeo de array de skills */}
                <div className="project-card__tech-list">
                  {project.tech.map((skill, index) => (
                    <span key={index} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Enlace externo al repositorio o demo */}
                <a
                  href={project.link}
                  className="project-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/git.png"
                    alt="GitHub"
                    className="project-card__social"
                  />
                </a>
              </div>
            </article>
            <div className="garden__thread"></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GardenCode;
