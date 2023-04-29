import React from "react";
import "./Project.css";
import Tunner from "./image/tunner.jpg";
import Snapshot from "./image/Snapshot.jpg";
import Weatherweb from "./image/weatherweb.jpg"
import Git from "./image/git.png"
import Open from "./image/open.png"

export default function Project() {
  return(
    <div className="Card" >
<div className="things-i-have-designed">
<h1>Things I Have Designed</h1>
<div className="item">
  <div className="project-img-container">
    <img className="project-img" src={Tunner} alt="Project" />
  </div>
  <div className="project-info">
    <h4 className="project-title">Personal Project</h4>
    <h4 className="project-subtitle">TUNNER</h4>
    <p className="project-card__text">A web app built with ReactJS where users can Watch and Search and Upload video.</p>
    <div className="project-details">
      <p>React</p>
      <p>Redux</p>
      <p>API</p>
      <p>CSS</p>
    </div>
    <div className="design-item__links-list">
      <a href="https://github.com/mayurmendhule/VidstrFrontend/tree/master" target="_blank" rel="noreferrer">
      <img className="gitImage" src={Git} alt="Link to project page" />
      </a>
      <a href="https://videostring.onrender.com/" target="_blank" rel="noreferrer">
        <img  className="openImage" src={Open} alt="Link to project repository" />
      </a>
    </div>
  </div>
</div>
</div>


<div className="things-i-have-designed">
<div className="item">
  <div className="project-img-container">
    <img className="project-img" src={Snapshot} alt="Project" />
  </div>
  <div className="project-info">
    <h4 className="project-title">Personal Project</h4>
    <h4 className="project-subtitle">SNAP SHOT</h4>
    <p className="project-card__text">A photo gallary built with React Hooks, Context API where users can search images from flickr API. It is accepted by React community as a showcase example on their website.</p>
    <div className="project-details">
      <p>React</p>
      <p>Redux</p>
      <p>API</p>
      <p>CSS</p>
    </div>
    <div className="design-item__links-list">
      <a href="https://github.com/mayurmendhule/SnapShot/tree/master" target="_blank" rel="noreferrer">
      <img className="gitImage" src={Git} alt="Link to project page" />
      </a>
      <a href="https://snapshorapp.netlify.app/" target="_blank" rel="noreferrer">
        <img  className="openImage" src={Open} alt="Link to project repository" />
      </a>
    </div>
  </div>
</div>
</div>


<div className="things-i-have-designed">
<div className="item">
  <div className="project-img-container">
    <img className="project-img" src={Weatherweb} alt="Project" />
  </div>
  <div className="project-info">
    <h4 className="project-title">Personal Project</h4>
    <h4 className="project-subtitle">WEATHER APP</h4>
    <p className="project-card__text">A web app built with ReactJS and Context API  where users can search weather report by entering City name.</p>
    <div className="project-details">
      <p>React</p>
      <p>API</p>
      <p>CSS</p>
    </div>
    <div className="design-item__links-list">
      <a href="https://github.com/mayurmendhule/weatherweb/tree/master" target="_blank" rel="noreferrer">
      <img className="gitImage" src={Git} alt="Link to project page"  />
      </a>
      <a href="https://weatherweb-thk3.onrender.com" target="_blank" rel="noreferrer">
        <img  className="openImage" src={Open} alt="Link to project repository" />
      </a>
    </div>
  </div>
</div>
</div>

<div className="gitLinkbutton">
<a
href="https://github.com/mayurmendhule"
className="gitbutton"
target="_blank"
rel="noreferrer"
>View More On Github</a>
</div>

</div>

  );
}

