import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import MyProjects from './Pages/MyProjects/MyProjects';
import Skills from './Pages/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 4-second delay before hiding the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 4000 milliseconds = 4 seconds
  }, []);

  return (
    <div className="App">

{isLoading ? (
        // Loading screen with the video
        <div className="loading-screen">
          <video autoPlay loop muted playsInline>
            <source src="vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        // Content displayed after loading
        <>
      <Navbar />
      <Routes>
      <Route path='/' Component={Home} />
  <Route path='/projects' Component={MyProjects} />
  <Route path='/skills' Component={Skills} />
  <Route path='/contact' Component={Contact} />
  <Route path='/aboutme' Component={AboutMe} />
      </Routes>
      <Footer />
      </>
       )}
    </div>
  );
}

export default App;
