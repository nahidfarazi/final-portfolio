import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Expraince from './components/Expraince';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Expraince />
      <Contact />

      {/* last */}
      <SocialLinks />
    </div>
  );
}

export default App;
