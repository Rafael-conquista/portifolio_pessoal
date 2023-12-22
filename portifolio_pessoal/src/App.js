import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Skills from "./components/skills";
import Destaques from "./components/destaques";
import Projetos from "./components/projetos";
import Footer from "./components/footer";

function App() {
  return (
    <div className="body">
      <Navbar className="teste" />
      <Welcome />
      <Skills />
      <Destaques />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
