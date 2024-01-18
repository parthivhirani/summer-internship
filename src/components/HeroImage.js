import "./HeroImageStyles.css";
import React from 'react'
/*import IntroImg from '../images/one.jpg';*/
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            {/*<img className="into-img" src={IntroImg} alt='IntroImg'/>*/}
        </div>
        <div className="content">
          <p>Hi, I am Programmer.</p>
          <h2>Styling thoughts...</h2>
          <div>
            <Link to='/career' className='btn'>Details</Link>
            <Link to='/contact' className='btn-light'>Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImage