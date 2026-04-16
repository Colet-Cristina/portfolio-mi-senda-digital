import "../styles/App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Herbalist from "./Herbalist";

function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <Hero />
        <Herbalist />
      </main>
    </div>
  );
}

export default App;
