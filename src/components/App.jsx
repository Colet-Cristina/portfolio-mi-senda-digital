import "../styles/App.scss";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <Hero />
      </main>
    </div>
  );
}

export default App;
