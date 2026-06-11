import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-gradients">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
      </div>
      
      <div className="container">
        <Hero />
        <Projects />
        <Academics />
        <Footer />
      </div>
    </>
  );
}

export default App;
