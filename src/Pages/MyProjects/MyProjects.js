import React from 'react';
import './MyProjects.css';

function MyProjects(props) {

    const openSiteInNewTab = (siteUrl) => {
        window.open(siteUrl, '_blank');
      };

    return (
      <div class='project'>
        <div className='container mb-5'>
           
<h1 className='text-center mb-4'>My Projects</h1>
<div class="row row-cols-1 row-cols-md-2 g-4">
  
<div class="col">
    <div class="card">
      <img src="./Assests/gmail.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title mb-0">Gmail Clone</h5>
        <p class="card-text m-0">Front-End : React & MaterialUI</p>
        <p class="card-text m-0">Back-End : NodeJs & Express</p>
        <p class="card-text m-0">Database : MongoDB</p>
        <p class="card-text m-0">Others : Smtpjs & Nodemailer</p>
      </div>
      <button class='btn btn-success' onClick={() => openSiteInNewTab('https://starlit-eclair-9585a9.netlify.app/')}>Visit Project</button>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Assests/hangman.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Hangman</h5>
        <p class="card-text">Front-End : HTML & CSS</p>
        <p class="card-text">Back-End : Javascript</p>
      </div>
      <button class='btn btn-success' onClick={() => openSiteInNewTab('https://flourishing-melomakarona-e32734.netlify.app/')}>Visit Project</button>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Assests/cricshop.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">CricShop</h5>
        <p class="card-text">Front-End : React</p>
        <p class="card-text">Library : Bootstrap</p>
         </div>
         <button class='btn btn-success' onClick={() => openSiteInNewTab('https://jovial-cupcake-0af95d.netlify.app/')}>Visit Project</button>
    </div>
  </div>
  
  <div class="col">
    <div class="card">
      <img src="./Assests/zomato.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Zomato Clone</h5>
        <p class="card-text">Front-End : HTML & CSS</p>
        <p class="card-text">Back-End : Javascript</p>
      </div>
      <button class='btn btn-success' onClick={() => openSiteInNewTab('https://merry-bubblegum-03cea8.netlify.app/')}>Visit Project</button>
    </div>
  </div>
</div>

        </div>
        </div>
    );
}

export default MyProjects;