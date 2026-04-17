import "../styles/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Herbalist from "./Herbalist";
import Footer from "./Footer";

function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <Hero />
        <Herbalist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
