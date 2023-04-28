import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../skills/images/one.png';
import img2 from '../skills/images/two.png';
import img3 from '../skills/images/three.png';
import img4 from '../skills/images/four.png';
import img5 from '../skills/images/five.png';
import img6 from '../skills/images/six.png';
import img7 from '../skills/images/seven.png';
import img8 from '../skills/images/eight.png';
import img9 from '../skills/images/nine.png';
import '../skills/Skills.css';

function Skills() {
  return (
    <div className="container">
      <div className="title">
        <h1>Skills</h1>
      </div>

      <div>
        <Marquee direction="left" speed={70} delay={4}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;