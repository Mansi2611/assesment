import "./App.css";
import About from "./components/About/About";
import Homepage from "./components/Homepage";
import MarketingITSolutions from "./components/Marketing/MarketingITSolutions";
import ProjectsPage from "./components/projects/ProjectsPage";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <div className="w-screen w-min-screen border-1 border-red-600">
        <Homepage />

        <ProjectsPage/>

        <MarketingITSolutions/>

        <Services/>
        <About/>
      </div>
    </>
  );
}

export default App;
