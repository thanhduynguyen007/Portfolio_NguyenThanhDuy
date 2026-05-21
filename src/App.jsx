import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="pb-[64px] md:pb-[120px] pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section className="mt-[120px] max-w-[1200px] mx-auto px-gutter bg-surface-container-lowest py-16 border-y border-outline-variant/20" id="experience">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Education />
            <Experience />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
