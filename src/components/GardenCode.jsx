import { useState, useEffect } from "react";
import projectsData from "../services/projectsData.json";
import "../styles/App.scss";

/**
 * Componente GardenCode
 * Lista de proyectos dinámicos y un modal con detalles.
 */
function GardenCode() {
  // Estados
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Variables

  const maxIndex = projectsData.length - 1;

  // -----  EFECTOS -----
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  // Acciones
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
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

      {/* Contenedor que recorta lo que sobra */}
      <div className="garden__slider-container">
        <ul
          className="garden__list"
          style={{
            /* Esta fórmula centra la flor seleccionada */
            transform: `translateX(-${currentIndex * 11}rem)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {projectsData.map((project, index) => {
            const isCenter = index === currentIndex;

            return (
              <li
                key={project.id}
                className={`garden__item ${isCenter ? "is-center" : ""}`}
              >
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
            );
          })}
        </ul>
      </div>

      <div className="garden__nav-actions">
        <button
          onClick={prevSlide}
          className="garden__nav-btn"
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="garden__nav-btn"
          disabled={currentIndex === maxIndex}
        >
          Next
        </button>
      </div>

      {/* -- MODAL -- */}
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
