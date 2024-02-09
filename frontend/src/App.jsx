import React from "react";
import "./App.css";
import Sidebar from "./components/SIdebar"; // Assurez-vous que le nom du fichier est correct
import MainContent from "./components/Maincontent"; // Vérifiez l'exactitude du chemin et du nom du fichier
import Experience from "./components/Experience";
import Project from "./components/Projects";
import LoginButton from "./components/LoginButton";
import HaloEffectButton from "./components/HaloEffectButton"; // Importez le nouveau composant

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content-container">
        <MainContent />
        <Experience />
        <Project />
        <HaloEffectButton />{" "}
      </div>
      <LoginButton />
    </div>
  );
}

export default App;
