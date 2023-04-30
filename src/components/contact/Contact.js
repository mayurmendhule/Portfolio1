import React from "react";
import "./Contact.css";
import Gitimage from "./image/git.png"
import LinkedIn from "./image/linkedin.png"
import LeadCode from "./image/le.ico"
import Twiter from "./image/twiter.png"

function Contact() {
  return (
    <div className="container1">
      <div className="left-section">
        <div className="location">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38989.02978942037!2d78.57499886098827!3d20.748983421981407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47f04f15aa69d%3A0xe76e35b13382a66c!2sWardha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1681815105329!5m2!1sen!2sin"
            width="450"
            height="340"
            title="google-map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="links">
          <a href="https://github.com/mayurmendhule" target="_blank" rel="noreferrer">
            <img src={Gitimage} alt="image1" width="40" height="40" />
          </a>
          <a href="https://www.linkedin.com/in/mayurmendhule/" target="_blank" rel="noreferrer">
            <img src={LinkedIn} alt="image2" width="30" height="30" />
          </a>
          <a href="https://leetcode.com/mayurmendhule23/" target="_blank" rel="noreferrer">
            <img src={LeadCode} alt="image3" width="30" height="30" />
          </a>
          <a href="https://twitter.com/MayurMendhule" target="_blank" rel="noreferrer">
            <img src={Twiter} alt="image4" width="30" height="30" />
          </a>
        </div>
      </div>
      <div className="right-section">
        <div className="contact-form">
          <h1 className="mb-4">
            <span className="strange">Don't be a stranger</span> just say Hello!
          </h1>
          <p id="para">
            Feel free to get in touch with me. I am always open to discussing
            new ideas or oppurtunities and to be a part of your visions.
          </p>
          <p id="para2">Need help?</p>
          <p className="mail">  
            <a  href="mailto:mayurmendhule03@gmail.com">
            mayurmendhule03@gmail.com
            </a>
          </p>
          <p className="mail"><a>+91-7769977955</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;