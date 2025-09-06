import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import ToolDetails from '../src/pages/ToolDetails';
import Terms from '../src/pages/Terms';
import PrivacyPolicy from '../src/pages/Privacy';
import EbooksListing from '../src/pages/EbooksListing';
import EbookDetail from '../src/pages/EbookDetail';




// import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ToolDetails/:id" element={<ToolDetails />} />
          <Route path="/Terms&Conditions" element={<Terms />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/EbooksListing" element={<EbooksListing />} />
          <Route path="/ebook/:id" element={<EbookDetail />} />

          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
