import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
//import Six from '../images/six.jpg'

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='new-class'>
            <div className='left'>
                <h1>Who am I?</h1>
                <p>I have completed my Bachelor of Engineering in Computer Science from Marwadi Education Foundation with 9.46 CPI. Currently I am exploring Dot Net technology and working as Trainee Engineer at Simform Solutions.</p>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            {/* <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={Six} className='img' alt='self'/>
                    </div>
                </div>
            </div> */}
        </div>
        <div className='about-new'>
            <div className='left-new'>
            <h1>Career Objective</h1>
            <p>Aim to do work with challenging organization that gives me scope
                to update my knowledge & skills in accordance with the least trends
                and be a part of team that dynamically works towards growth of organization.
            </p>
            </div>
        </div>

        <div className='card-container2'>
            <div className='card'>
                <h3>-Hobbies-</h3>
                <span className='bar'></span>
                <p>Watching Cricket</p>
                <p>Nature Photography</p>
                <p>Travelling</p>
            </div>

            <div className='card'>
                <h3>-Strengths-</h3>
                <span className='bar'></span>
                <p>Creative</p>
                <p>Self-motivated</p>
                <p>Quick Lerner</p>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
