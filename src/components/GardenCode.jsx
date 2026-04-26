import { useState, useEffect } from "react";
import projectsData from "../services/projectsData.json";
import "../styles/App.scss";

/**
 * Componente GardenCode
 * Lista de proyectos dinámicos y un modal con detalles.
 */
function GardenCode() {
  // Estado para manejar qué proyecto mostrar en el modal
  const [selectedProject, setSelectedProject] = useState(null);

  // EFECTO PARA EL SCROLL: Se encarga de bloquear/desbloquear el body
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="garden js_garden">
      {/* Elementos decorativos */}
      <div className="sakura-branch"></div>
      <div className="falling-petals">
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
      </div>

      <h2 className="garden__title">El Jardín</h2>
      <p className="garden__subtitle">Proyectos cultivados con código</p>

      <ul className="garden__list">
        {projectsData.map((project) => (
          <li key={project.id} className="garden__item">
            <article
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-card__content">
                <h3 className="project-card__name">{project.title}</h3>
                <span className="project-card__plus">+ info</span>
              </div>
            </article>
            <div className="garden__thread"></div>
          </li>
        ))}
      </ul>

      {/* RENDERIZADO CONDICIONAL DEL MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <div className="modal-body">
              <img
                src={selectedProject.image}
                alt={`Captura de ${selectedProject.title}`}
                className="modal-img"
              />
              <div className="modal-info">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">
                  {selectedProject.description}
                </p>

                <div className="modal-tech">
                  {selectedProject.tech.map((skill, index) => (
                    <span key={index} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-btn"
                  >
                    Ver en GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GardenCode;
