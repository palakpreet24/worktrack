import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from './compnents/Content';
import Header from './compnents/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
     <Content />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;