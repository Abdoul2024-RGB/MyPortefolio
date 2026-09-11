
import './App.css'
import { Code2, Rocket } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {


  return (
    <div className="min-h-screen bg-brand-bg text-white max-w-full  ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />

    </div >

  )
}

export default App
