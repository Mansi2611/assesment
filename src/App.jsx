import "./App.css";
import Homepage from "./components/Homepage";
import ProjectsPage from "./components/projects/ProjectsPage";

function App() {
  return (
    <>
      <div className="w-screen w-min-screen border-1 border-red-600">
        <Homepage />

        {/* to be fixed */}
        {/* <ProjectsPage/> */}
      </div>
    </>
  );
}

export default App;
