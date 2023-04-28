import React from "react";
import "../education/Education.css";
import Educationimg from "../education/education.png";
import Degreeimg from "../education/degree.png";
import { educationData } from "../education/educationData";

export default function Education() {
  return (
    <div className="education-description">
      <div className="card-container">
        <h1>Education</h1>
        {educationData.map((education) => (
          <div className="card" key={education.id}>
            <div className="card-content">
              <div className="card-image">
                <img src={Degreeimg} alt="degree" />
              </div>
              <div className="card-text">
                <p className="date">
                  {education.startYear} - {education.endYear}
                </p>
                <p className="job-title" style={{ fontWeight: "bold" }}>
                  {education.course}
                </p>
                <p className="school">{education.institution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="image-container">
        <img src={Educationimg} alt="education" />
      </div>
    </div>
  );
}
