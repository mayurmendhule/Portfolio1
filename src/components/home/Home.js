import React, { useState, useEffect } from 'react'
import "../home/Home.css"
import Shape from "../images/shape3.png"
// import Front from "../images/front2.png"
import Resume from "../resume/Mayur'sResume.pdf"
import { Link } from 'react-scroll';

export default function Home() {
  const [isMayur, setIsMayur] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsMayur(!isMayur);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [isMayur]);

  return (
    <div>
        <div className='detel'>
        <h1>I'm <span className='flipX'>{isMayur ? 'Mayur' : 'A Developer'}</span></h1>
        <p>Building a successful product is a challenge. I am highly energetic in building <br></br>
        web interfaces and front-end development.</p>
        <a href={Resume} download>Download CV</a>
        <Link to='contact' smooth={true} duration={600} className='contactme'>Contact Me</Link>
        </div>
        <div className="images">
        <img className="shape" src={Shape}  alt='png'/>
        {/*<img src={Front} className="boy" alt=image1/>*/}
        </div>  
    </div>
  )
}
