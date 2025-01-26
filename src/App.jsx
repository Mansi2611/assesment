import "./App.css";
import About from "./components/About/About";
import Footer from "./components/FooterSection/Footer";
import Homepage from "./components/Homepage";
import MarketingITSolutions from "./components/Marketing/MarketingITSolutions";
import ProjectsPage from "./components/projects/ProjectsPage";
import Reviews from "./components/Reviews/Reviews";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <div className="w-screen w-min-screen  overflow-x-hidden">
        <Homepage />



{/* overflow to be removed */}
        <ProjectsPage/>

        <MarketingITSolutions />

        <Services/>
        <About/>

        <Reviews/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
