import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Terminal from './components/Terminal';
import Stats from './components/Stats';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import AchievementWall from './components/AchievementWall';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CursorEffect from './components/CursorEffect';
import LoadingScreen from './components/LoadingScreen';
import PersonalStrengths from './components/PersonalStrengths';
import CurrentlyLearning from './components/CurrentlyLearning';
import GitHubStats from './components/GitHubStats';
import Achievements from './components/Achievements';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen relative overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CursorEffect />
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            
            <About />
            <Stats />
            <PersonalStrengths />
            <Skills />
            
            {/* Professional & Realistic Student Sections */}
              <Projects />
              <Timeline />
              <CurrentlyLearning />
              <Achievements />
              <GitHubStats />
              <Terminal />
              <Contact />
          </main>

          <Footer />
          <Chatbot />
        </>
      )}
    </div>
  );
}

export default App;
