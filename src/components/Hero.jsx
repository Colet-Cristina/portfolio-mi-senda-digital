function Hero() {
  return (
    <section id="about" className="hero js_hero">
      <div className="hero__content">
        <h2 className="hero__greeting">Bienvenida a mi dojo digital</h2>
        <h3 className="hero__name">Soy Cristina Colet.</h3>
        <p className="hero__description">
          Al igual que en un jardín Zen, busco un código limpio, el orden y el
          crecimiento constante. Aquí podrás ver cómo cultivo soluciones
          digitales tras mi paso por Adalab.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn">
            Explorar Herbolario
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
