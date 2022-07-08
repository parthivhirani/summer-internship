import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import React from 'react'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <div>
                        <p>Rajkot, Gujarat, India.</p>
                    </div>
                </div>

                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    +91 9574760899</h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    parthivhirani03@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>Final year student. Looking for a job. Always ready to learn new technologies.</p>
                <div className='social'>
                <a href='https://www.linkedin.com/in/parthiv-hirani-61a6421b8' target='_blank'>
                <FaLinkedin size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
                <a href='https://twitter.com/parthivh1?t=ZTH1eXP108hwWPOLOwTACw&s=09' target='_blank'>
                <FaTwitter size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
                <a href='https://github.com/parthivhirani' target='_blank'>
                <FaGithub size={20} style={{color:'#fff', marginRight:'2rem'}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer