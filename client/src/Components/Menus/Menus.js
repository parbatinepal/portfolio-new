import React from 'react';
import "./Menus.css";
import { FcAbout, FcBiotech, FcContacts, FcHome, FcPortraitMode, FcReading, FcVideoProjector } from 'react-icons/fc';
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
         <FcHome />
          Home
          </div>
          <div className="nav-link">
         <FcAbout />
          About
          </div>
          <div className="nav-link">
         <FcPortraitMode />
          Work 
          </div>
          <div className="nav-link">
         <FcBiotech />
          Tech stack
          </div>
          <div className="nav-link">
         <FcReading />
          Education
          </div>
          <div className="nav-link">
         <FcVideoProjector />
          Project
          </div>
          <div className="nav-link">
         <FcContacts />
          Contact
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
         <FcPortraitMode title="Work" />
          </div>
          <div className="nav-link">
         <FcBiotech title=" Tech stack" />
          </div>
          <div className="nav-link">
         <FcReading title="Education" />
          </div>
          <div className="nav-link">
         <FcVideoProjector title="Project"  />
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