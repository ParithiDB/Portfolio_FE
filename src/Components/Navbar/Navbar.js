import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DarkMode from '../DarkMode';


function Navbar(props) {
  const [focusedLink, setFocusedLink] = useState(null);

  const handleLinkFocus = (link) => {
    setFocusedLink(link);
  };

    return (
      <div className="top">
        <nav className="navbar">
  <div className="container-fluid">
  <Link to='/' className={`navbar-brand ${focusedLink === 'home' ? 'focused' : ''} mt-2`} onClick={() => handleLinkFocus('home')}>
      <h4 className='name-logo'>Parithi</h4>
      </Link>
      <ul class="nav nav-pills justify-content-end">
  <li class="nav-item">
    <Link to='/'  className={`nav-link ${focusedLink === 'home' ? 'focused' : ''}`}
          onClick={() => handleLinkFocus('home')} activeClassName="active" aria-current="page">Home</Link>
  </li>
  <li class="nav-item">
    <Link to='/projects'  className={`nav-link ${focusedLink === 'projects' ? 'focused' : ''}`}
          onClick={() => handleLinkFocus('projects')} activeClassName="active">My Projects</Link>
  </li>
  <li class="nav-item">
    <Link to='/skills'  className={`nav-link ${focusedLink === 'skills' ? 'focused' : ''}`}
          onClick={() => handleLinkFocus('skills')} activeClassName="active">Skills</Link>
  </li>
  <li class="nav-item">
    <Link to='/contact'  className={`nav-link ${focusedLink === 'contact' ? 'focused' : ''}`}
          onClick={() => handleLinkFocus('contact')} activeClassName="active">Contact</Link>
  </li>
  <li class="nav-item">
    <Link to='/aboutme'  className={`nav-link ${focusedLink === 'aboutme' ? 'focused' : ''}`}
          onClick={() => handleLinkFocus('aboutme')} activeClassName="active">AboutMe</Link>
  </li>
  <li><DarkMode /></li>
</ul>

  </div>
  
</nav>
</div>
    );
}

export default Navbar;