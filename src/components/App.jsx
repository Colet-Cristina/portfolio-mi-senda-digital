import "../styles/App.scss";

import { Routes, Route } from "react-router";

import Header from "./Header";
import Hero from "./Hero";
import Herbalist from "./Herbalist";
import tools from "./tools";
import Footer from "./Footer";

function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main js_main">
        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/jardin-de-codigo" element={<Herbalist />} />

          <Route path="/tools" element={<tools />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
