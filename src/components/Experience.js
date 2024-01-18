import './SkillsStyles.css'
import React from 'react'

const Experience = () => {
  return (
    <div className='skills'>
        <h1 className='edu-title'>Work Experience</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>Evision IT Solutions</h3>
                <span className='bar'></span>
                <p><strong>Role:</strong> Software Engineer</p>
                <p><strong>Stack:</strong> .NET, Sitecore</p>
                <p><strong>Duration:</strong> September 2023 to current</p>
            </div>

            <div className='card'>
                <h3>Simform Solutions</h3>
                <span className='bar'></span>
                <p><strong>Role:</strong> Trainee Engineer</p>
                <p><strong>Stack:</strong> .NET</p>
                <p><strong>Duration:</strong> February 2023 to July 2023</p>
            </div>

            <div className='card'>
                <h3>TatvaSoft</h3>
                <span className='bar'></span>
                <p><strong>Role:</strong> Intern</p>
                <p><strong>Stack:</strong> React JS, .NET</p>
                <p><strong>Duration:</strong> 20 June to 8 July 2022</p>
            </div>
        </div>
        <br /><br /><br />
    </div>
  )
}

export default Experience