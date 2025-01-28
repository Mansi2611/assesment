import "./App.css";
import About from "./components/About/About";
import Build from "./components/Build/Build";
import { Clients } from "./components/Clients/Clients";
import Footer from "./components/FooterSection/Footer";
import Homepage from "./components/Homepage";
import MarketingITSolutions from "./components/Marketing/MarketingITSolutions";
import ProjectsPage from "./components/projects/ProjectsPage";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <div className="w-[100%] w-min-screen  overflow-x-hidden ">
        <Homepage />
        <ProjectsPage />
        <MarketingITSolutions />
        <Services />
        <About />
        <Build />
        <Reviews />
        <Clients />
        <Footer />
      </div>
    </>
  );
}

export default App;
