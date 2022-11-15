import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootStyles } from "./root-styles";
import LandingPaage from "./routes/home/home-page.component";
import Properties from "./routes/properties/properties.component";
import Projects from "./routes/projects/projects.components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPaage />} />
          <Route path="properties" element={<Properties />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <RootStyles />
    </div>
  );
}

export default App;
