import "./SIdebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Hamed ATTAR</h1>
        <p className="sidebar-subtitle">Développeur Fullstack</p>
      </div>
      <nav className="navigation">
        <a href="#about" className="nav-link">
          À Propos
        </a>
        <a href="#experience" className="nav-link">
          Expérience
        </a>
        <a href="#projects" className="nav-link">
          Projets
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
