import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './compnents/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from './compnents/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;