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
            <h2 class='text-center'>TECH I'M FAMILIAR WITH</h2>
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
            </div>
    );
}

export default Skills;