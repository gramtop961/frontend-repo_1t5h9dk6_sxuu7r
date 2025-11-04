import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased selection:bg-fuchsia-500/20 selection:text-fuchsia-200">
      {/* Global background auras */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[60vw] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-1/4 -left-24 h-[30vh] w-[40vw] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
