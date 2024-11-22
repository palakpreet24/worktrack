import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './compnents/Header';
import Home from "./pages/Home";
import Footer from './compnents/Footer';

function App() {
  return (
    <Router>
    <div className="App">
    {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;