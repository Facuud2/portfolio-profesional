import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
  return (
    <div className="bg-matte-black min-h-screen">
      <ScrollProgressBar />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="text-center py-8 border-t border-gray-800">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Facundo David Carrizo Lucero. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;