import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { RootStyles } from "./root-styles";
import LandingPaage from "./routes/home/home-page.component";
import Properties from "./routes/properties/properties.component";
import Projects from "./routes/projects/projects.components";
import Subsidiaries from "./routes/subsidiaries/subsidiaries.components";
import AboutUs from "./routes/about-us/about-us.components";
import ContactUs from "./routes/contact/contact.components";
import Property from "./routes/property/property.components";
import BasicExample from "./routes/testing/testing.components";

function App() {
  return (
    <div className="App">
      <HashRouter
        basename={
          process.env.NODE_ENV === "development" ? "" : process.env.PUBLIC_URL
        }
      >
        <Routes>
          <Route path="/" element={<LandingPaage />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/p" element={<Property />} />
          <Route path="projects" element={<Projects />} />
          <Route path="subsidiaries" element={<Subsidiaries />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="testing" element={<BasicExample />} />
        </Routes>
      </HashRouter>
      <RootStyles />
    </div>
  );
}

export default App;
