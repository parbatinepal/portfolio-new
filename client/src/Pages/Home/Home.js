import React from 'react';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.txt'
import './Home.css';

const Home = () => {
  return (
    <div>
        <>
        <div className="container-fluid home-container">
          <div className="container home-content">
            <h2>Hi 👋 i'm</h2>
            <h1>
              <Typewriter
              options={{
                strings:["React Developer!"],
                autoStart:true,
                loop: true,
              }}
              />
            </h1>
            <div className="home-buttons">
              <button className="btn btn-hire">Hire Me</button>
              <a className="btn btn-cv"href={Resume} download ="your_name.pdf">My Resume</a>
            </div>
          </div>
        </div>
        </>
    </div>
  )
}

export default Home