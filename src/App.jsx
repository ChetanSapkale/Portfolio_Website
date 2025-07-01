import React from 'react';
import HeroSection from './components/Herosection';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#fff' }}>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
