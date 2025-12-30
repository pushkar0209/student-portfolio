import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';
import ProjectDetails from './pages/ProjectDetails';
import useTheme from './hooks/useTheme';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import CustomCursor from './components/CustomCursor';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className={`min-h-screen transition-colors duration-500 mesh-background ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="noise-overlay" />

        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
