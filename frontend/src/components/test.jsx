import Sidebar from "./SIdebar";
import MainContent from "./Maincontent";
import Experience from "./Experience";
import Project from "./Projects";
import LoginButton from "./LoginButton";

function UnifiedComponent() {
  return (
    <div className="unified-container">
      <Sidebar />
      <MainContent />
      <Experience />
      <Project />
      <LoginButton />
    </div>
  );
}

export default UnifiedComponent;
