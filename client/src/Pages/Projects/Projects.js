import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-1 text-center">Top recent projects</h2>

        <hr />
        <p className="pb-3 text-center">
          Here are my top 1 recent projects with live link and source code
        </p>
        <div className="row border-none" id="ads">
          <div className="col-md-4">
            <div className="card border-none">
              <div className="card-image">
                <span className="card-notify-badge">Mern stack</span>
                <img
                  src="image/ecommerce1.jpg"
                  alt="project1"
                  className="project1"
                />
              </div>
              <div className="card-image-overly ">
                <span className="card-detail-badge">Mongodb</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title ">
                  <h5 className="text-uppercase">Bidding Based Ecommerce</h5>
                </div>
                <a className="ad-btn" href="https://github.com/parbatinepal/Bidding-Based-Ecommerce">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
