import './SkillsStyles.css'
import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
        <h1 className='edu-title'>Technology Known</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>Programming Languages</h3>
                <span className='bar'></span>
                <p>Python</p>
                <p>C</p>
                <p>Shell Script</p>
                <p>Java</p>
            </div>

            <div className='card'>
                <h3>Scripting Languages</h3>
                <span className='bar'></span>
                <p>React JS</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
            </div>

            <div className='card'>
                <h3>DBs and Tools</h3>
                <span className='bar'></span>
                <p>Oracle</p>
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>Visual Studio, VS Code</p>
            </div>
        </div>
        <br /><br /><br />
    </div>
  )
}

export default Skills