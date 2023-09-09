import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import MyProjects from './Pages/MyProjects/MyProjects';
import Skills from './Pages/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/projects' Component={MyProjects} />
        <Route path='/skills' Component={Skills} />
        <Route path='/contact' Component={Contact} />
        <Route path='/aboutme' Component={AboutMe} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
