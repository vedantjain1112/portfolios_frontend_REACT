import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home//Home";
import MySelf from "./components/pages/myself/MySelf";
import About from "./components/pages/about/About";
import ContactHome from "./components/pages/contact/ContactHome";
import PortfolioHome from "./components/pages/portfolio/PortfolioHome";
import ServicesHome from "./components/pages/services/ServicesHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my_self" element={<MySelf />} />
        <Route exact path="/about-myself" element={<About />} />
        <Route exact path="/my-projects" element={<PortfolioHome />} />
        <Route exact path="/my-services" element={<ServicesHome />} />
        <Route exact path="/contact" element={<ContactHome />} />
      </Routes>
    </div>
  );
}

export default App;
