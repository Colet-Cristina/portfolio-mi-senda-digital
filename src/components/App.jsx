/**
 * Componente principal de la aplicación (Root Component).
 * Gestiona la estructura global (Layout), los estilos base y el sistema de rutas.
 */
import "../styles/App.scss";

// Importación de librerías externas
import { Routes, Route } from "react-router";

// Importación de componentes
import Header from "./Header";
import Hero from "./Hero";
import Roots from "./Roots";
import GardenCode from "./GardenCode";
import Tools from "./Tools";
import Footer from "./Footer";

/**
 * Función App
 * Define el contenedor principal y la lógica de renderizado.
 */
function App() {
  return (
    <div className="layout">
      {/* Componente de cabecera: Contiene el logo y el menú de navegación */}
      <Header />

      {/* Área principal de contenido */}
      <main className="main js_main">
        <Routes>
          {/* Ruta de inicio: Presentación principal del portfolio */}
          <Route path="/" element={<Hero />} />

          {/* Sección Raíces: Información biográfica */}
          <Route path="/Roots" element={<Roots />} />

          {/* Sección de portfolio: Listado de proyectos dinámicos */}
          <Route path="/jardin-de-codigo" element={<GardenCode />} />

          {/* Sección de herramientas: Stack tecnológico y skills */}
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </main>

      {/* Componente de pie de página: Información de contacto y redes sociales */}
      <Footer />
    </div>
  );
}

export default App;
