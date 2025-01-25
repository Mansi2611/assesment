import "./App.css";
import Homepage from "./components/Homepage";
import MarketingITSolutions from "./components/Marketing/MarketingITSolutions";
import ProjectsPage from "./components/projects/ProjectsPage";

function App() {
  return (
    <>
      <div className="w-screen w-min-screen border-1 border-red-600">
        <Homepage />

        <ProjectsPage/>

        <MarketingITSolutions/>
      </div>
    </>
  );
}

export default App;
