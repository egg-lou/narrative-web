import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage"
import AboutPage from "./pages/AboutPage";
import NotfoundPage from './pages/NotfoundPage';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/blog/*" element={<NotfoundPage />} />
          <Route path ='*' element={<NotfoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;