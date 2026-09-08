import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [placeSrc, setPlaceSrc] = useState(null);
  const [image, setImage] = useState('/images/kashmir.jpg');

  const onPlace = useCallback((src) => {
    if (src) {
      setImage(src);
    }
    setPlaceSrc(src);
  }, []);

  useEffect(() => {
    ['/images/kashmir.jpg', '/images/bangalore.jpg'].forEach((src) => {
      const preload = new Image();
      preload.src = src;
    });
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-background dark:bg-dark-background bg-notebook dark:bg-dark-notebook bg-notebook-horizontal dark:bg-dark-notebook-horizontal">
        <div
          aria-hidden
          className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ${
            placeSrc ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-background/45 dark:bg-dark-background/50" />
        </div>
        <Navbar />
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<Home onPlace={onPlace} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
