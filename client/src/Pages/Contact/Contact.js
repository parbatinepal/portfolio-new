import React from "react";
import "./Contact.css";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
const Contact = () => {
  return (
    <div>
      <>
        <div className="container contact">
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-xl-6 gap-10  sm-12">
                <div className="card1 bg-success">
                  <div className="row-border-line ">
                    <img
                      src="https://th.bing.com/th?id=OIP.qmhxB95_8egHBidSuEbwNgHaG8&w=258&h=242&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                      alt="Contact"
                      className="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="row">
                  <div className="card2 d-flex  border-0 px-4 py-3">
                  <h6>Contact With 
                    <AiFillLinkedin color="blue" className="ms-2" size={25}/>
                    <AiFillGithub color="black" className="ms-2" size={25}/>
                  </h6>
                  </div>
                  <div className="orline px-3 mb-4 ">
                    <span className="line"></span>
                    <small className="or text-center">OR</small>
                    <span className="line"></span>
                  </div>
                  <form className="contactForm">
                  <div className="contactFormDiv">
                  <div className="row px-3">
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                     type="text"
                    name="msg"
                    rows={4}
                    placeholder="Write Your Message"
                    className="mb-3"
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" type="Submit">
                      SEND MESSAGE
                    </button>
                  </div>
                  </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Contact;
