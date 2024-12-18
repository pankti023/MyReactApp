import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatBox from './components/ChatBox';
import WorkExperience from './components/WorkExperience'
import { observeSections } from './utils/sectionObserver';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    observeSections();

    const handleScroll = () => {
      const sections = ['hero', 'about', 'workexperience', 'education', 'skills', 'projects'];
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition + 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
    <div style={{overflowX:'hidden',overflowY:'hidden', width:'100%'}}>
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <About />
      <WorkExperience/>
      <Education />
      <Skills />
      <Projects />
      <Footer openChat={() => setIsChatOpen(true)} />
      <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
    </div>
  );
}

export default App;
