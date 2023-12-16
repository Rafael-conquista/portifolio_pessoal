import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Skills from "./components/skills";
import Destaques from "./components/destaques";

function App() {
  return (
    <div className="body">
      <Navbar className="teste"/>
      <Welcome/>
      <Skills/>
      <Destaques/>
    </div>
  );
}

export default App;
