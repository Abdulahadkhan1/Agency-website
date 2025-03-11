import React from 'react';
import { ArrowRight, Award, BarChart3, Building2, ChevronDown, Globe2, Menu, Users2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Industries from './components/Industries';
import Awards from './components/Awards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Industries />
      <Awards />
      <Footer />
    </div>
  );
}

export default App;