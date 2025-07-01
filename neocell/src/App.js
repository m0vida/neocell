import React from 'react';
import './App.css';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
