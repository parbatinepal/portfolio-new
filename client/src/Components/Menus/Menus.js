import React from 'react';
import "./Menus.css";
import { Link } from 'react-scroll';
import { 
  FcAbout,
  FcBiotech, 
  FcContacts,
  FcHome,
  FcPortraitMode, 
  FcReading, 
  FcVideoProjector 
  } from 'react-icons/fc';
const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
     <>
     <div className="navbar-profile-pic">
         <img src = "image/profile.jpg" alt="profile pic"/>
     </div>
     <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
          <Link
           to="home"
           spy={true} 
           smooth={true} 
           offset={-100} 
          duration={100}  >
         <FcHome />
          Home
          </Link>
          </div>
          <div className="nav-link">
            <Link
            to="about"
            spy={true} 
            smooth={true} 
            offset={-100} 
           duration={100}>
         <FcAbout />
          About
          </Link>
          </div>
          <div className="nav-link">
            <Link
            to="education"
            spy={true} 
            smooth={true} 
            offset={-100} 
           duration={100}>
         <FcReading />
          Education
          </Link>
          </div>
          <div className="nav-link">
            <Link
            to="techstack"
            spy={true} 
            smooth={true} 
            offset={-100} 
           duration={100}>
         <FcBiotech />
          Techstack
          </Link>
          </div>
          
          <div className="nav-link">
            <Link
            to="project"
            spy={true} 
            smooth={true} 
            offset={-100} 
           duration={100}>
         <FcVideoProjector />
          Project
          </Link>
          </div>
          <div className="nav-link">
          <Link
            to="work"
            spy={true} 
            smooth={true} 
            offset={-100} 
           duration={100}>
         <FcPortraitMode />
          Work 
          </Link>
          </div>
          <div className="nav-link">
          <Link
            to="contact"
            spy={true} 
            smooth={true} 
            offset={-100} 
           duration={100}>
          <FcContacts />
          Contact
          </Link>
          </div>
      </div>
      </div>
     </>
    ) : (
     <>
     <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
         <FcHome title="Home" />
          </div>
          <div className="nav-link">
         <FcAbout title='About' />
          </div>
          <div className="nav-link">
         <FcReading title="Education" />
          </div>
          <div className="nav-link">
         <FcBiotech title=" Tech stack" />
          </div>
          <div className="nav-link">
         <FcVideoProjector title="Project"  />
          </div>
          <div className="nav-link">
         <FcPortraitMode title="Work" />
          </div>
          <div className="nav-link">
         <FcContacts title="Contact" />
          </div>
      </div>
      </div>
     </>
    )}    
    </> 
  );
};

export default Menus;