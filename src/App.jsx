import "./App.css";
import About from "./components/About/About";
import Homepage from "./components/Homepage";
import MarketingITSolutions from "./components/Marketing/MarketingITSolutions";
import ProjectsPage from "./components/projects/ProjectsPage";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <div className="w-screen w-min-screen border-1 border-red-600 overflow-x-hidden">
        <Homepage />

        <ProjectsPage/>

        <MarketingITSolutions/>

        <Services/>
        <About/>

        <Reviews/>
      </div>
    </>
  );
}

export default App;
