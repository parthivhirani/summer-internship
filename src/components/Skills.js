import './SkillsStyles.css'
import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
        <h1 className='edu-title'>Technology Known</h1>
        <div className='card-container'>
            <div className='card'>
                <h3>Languages & Frameworks</h3>
                <span className='bar'></span>
                <p>C#</p>
                <p>ADO .NET</p>
                <p>LINQ</p>
                <p>Entity Framework</p>
                <p>ASP .NET MVC</p>
                <p>.NET Core</p>
            </div>

            <div className='card'>
                <h3>Scripting Languages</h3>
                <span className='bar'></span>
                <p>HTML</p>
                <p>CSS, Bootstrap</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
            </div>

            <div className='card'>
                <h3>DBs and Tools</h3>
                <span className='bar'></span>
                <p>SQL Server</p>
                <p>PostgreSQL</p>
                <p>Visual Studio, VS Code</p>
                <p>SQL Server Mamagement Studio</p>
                <p>Git and Github</p>
            </div>
        </div>
        <br /><br /><br />
    </div>
  )
}

export default Skills