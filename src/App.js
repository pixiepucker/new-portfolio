import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Project />
      <Resume />
      <Footer />
      <main></main>
    </div>
  );
}

export default App;
