import React from 'react';
import './Skills.css';

function Skills(props) {
    return (
        <div>
            <div className='row skills-container'>
            <h1 className='text-center mb-4'>Skills</h1>
                
                <div className='col-12 col-md-3'>
                <div class="card border-info mb-3">
                    
                    <div class="card-body">
                        <h5 class="card-title text-center">Web Development</h5>
                        <p class="card-text text-center">
I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-12 col-md-3'>
                <div class="card border-info mb-3">
                    
                    <div class="card-body">
                        <h5 class="card-title text-center">Web Design</h5>
                        <p class="card-text text-center">
I love designs and it's the first step before creating any website as I can give layout to my imagination.</p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-12 col-md-3'>
                <div class="card border-info mb-3">
                    
                    <div class="card-body">
                        <h5 class="card-title text-center">Problem Solving</h5>
                        <p class="card-text text-center">
I love solving problems whether programming problems or real life problems.</p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className='vertical-lineee'>
            <h2 class='text-center techim'>TECH I'M FAMILIAR WITH</h2>
                <div class='icons-tech'>
                <div class='row w-100'>
                    <div class='col-12 col-md-3'>
                    <div class="card text-bg-light mb-3">
  <div class="card-header">Front-End</div>
  <div class="card-body">
   
    <ul class="card-text">
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Material UI</li>
    </ul>
  </div>
</div>
</div>
<div class='col-12 col-md-3'>
                    <div class="card text-bg-light mb-3">
  <div class="card-header">Back-End</div>
  <div class="card-body">
    
  <ul class="card-text">
        <li>Javascript</li>
        <li>NodeJs</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Mongoose</li>
    </ul>
    </div>
</div>
</div>
<div class='col-12 col-md-3'>
                    <div class="card text-bg-light mb-3">
  <div class="card-header">Others</div>
  <div class="card-body">
    
  <ul class="card-text">
        <li>Amazon Web Services</li>
        <li>Data Structures and Algorithms</li>
       
    </ul></div>
</div>
</div>
                    </div>
                </div>
            </div>
            <div className='icons-git row p-1' align="center" dir="auto"> 
            <div className='icon-container col-12 col-md-12'>
             <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="80" height="80" style={{maxWidth: '100%'}} />
              <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="80" height="80" style={{maxWidth: '100%'}} />
               
               <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80" style={{maxWidth: '100%'}}/>
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80" style={{maxWidth: '100%'}} /> 
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="80" height="80" style={{maxWidth: '100%'}} /> 
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80" style={{maxWidth: '100%'}} /> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="80" style={{maxWidth: '100%'}} /><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80" style={{maxWidth: '100%'}} />
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="100" height="40" style={{maxWidth: '100%', maxHeight: '100%'}} />
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80" style={{maxWidth: '100%'}} />
                       </div>
                       </div>
            </div>
    );
}

export default Skills;