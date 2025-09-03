import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import ToolDetails from '../src/pages/ToolDetails';
// import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ToolDetails" element={<ToolDetails />} />

          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
