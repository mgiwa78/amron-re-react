import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootStyles } from "./root-styles";
import LandingPaage from "./routes/home/home-page.component";
import Properties from "./routes/properties/properties.component";
import Projects from "./routes/projects/projects.components";
import Subsidiaries from "./routes/subsidiaries/subsidiaries.components";
import AboutUs from "./routes/about-us/about-us.components";
import ContactUs from "./routes/contact/contact.components";
import Property from "./routes/property/property.components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPaage />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/p" element={<Property />} />
          <Route path="projects" element={<Projects />} />
          <Route path="subsidiaries" element={<Subsidiaries />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <RootStyles />
    </div>
  );
}

export default App;
