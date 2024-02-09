import "./MainContent.css";

function MainContent() {
  return (
    <main className="main-content">
      <section id="about" className="section about">
        <h2>About</h2>
        <p>
          Bonjour ! Je suis un développeur full-stack passionné, avec un amour
          pour la création d'applications web belles et fonctionnelles. J'ai de
          l'expérience dans le travail avec une variété de technologies,
          notamment React, Node.js, Express, js, et plus encore.
        </p>
      </section>

      <section id="skills" className="section skills">
        <h2>Compétences</h2>
        <div className="skill-list">
          <div className="skill">
            <h3>Développement Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript </li>
              <li>React</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Développement Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>mySQL</li>
            </ul>
          </div>
          <div className="skill">
            <h3>Autres Compétences</h3>
            <ul>
              <li>Design Responsive</li>
              <li>UI/UX Design</li>
              <li>Git & Contrôle de Version</li>
              <li>Développement Agile</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects" />
    </main>
  );
}

export default MainContent;
