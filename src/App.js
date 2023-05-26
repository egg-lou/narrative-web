import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage"
import AboutPage from "./pages/AboutPage";
import Prep from "./pages/Prep"
import Part1 from "./pages/Part1";
import Part2 from "./pages/Part2";
import End from "./pages/End";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path ="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/preparation" element={<Prep />} />
          <Route path="/part1" element={<Part1 />} />
          <Route path="/part2" element={<Part2/>} />
          <Route path="/end" element={<End />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;

