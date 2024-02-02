import About from "./component/About";
import Projects from "./component/Project";
import Contact from "./component/Contact";

function Main() {
  return (
    <main className="main-content">
      <About />
      <Projects />
      <Contact />
      <Main />
    </main>
  );
}
