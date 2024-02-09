import "./Project.css";

const projects = [
  {
    title: "Consultant en Audit SEO et Cybersécurité chez Ygor",
    date: "Novembre 2023",
    description:
      "Réalisé un audit SEO et de cybersécurité chez Ygor, identifiant des améliorations clés pour optimiser le positionnement en ligne et la sécurité informatique.",
    image:
      "https://upload.wikimedia.org/wikipedia/fr/e/e4/WildCodeSchool_logo_pink_background_400x220.png",
  },
  {
    title: "Développement Portfolio interactif Mathéo Manon",
    date: "2023",
    description:
      "Conception et développement complet du portfolio interactif de Mathéo Manon, en utilisant les langages HTML, CSS et JavaScript. Optimisation des performances pour assurer un chargement rapide et une navigation fluide. Collaboration étroite avec Mathéo Manon.",
    image:
      "https://upload.wikimedia.org/wikipedia/fr/e/e4/WildCodeSchool_logo_pink_background_400x220.png",
  },
];

function Project() {
  return (
    <section id="projects" className="projects">
      {" "}
      {/* Ajout de l'identifiant "projects" */}
      <h2 className="project-title">Projets</h2>
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.image} alt={project.title} />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.date}</p>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Project;
