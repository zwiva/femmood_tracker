import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import './assets/styles/App.css';

// import { useState } from 'react'
// const [count, setCount] = useState(0);

// en App se construyen con elementos compartidos
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}