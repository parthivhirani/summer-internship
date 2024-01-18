import './EducationStyles.css'
import React from 'react'

const Education = () => {
  return (
    <div className='education'>
        <h1 className='edu-title'>Academics</h1>
        <div className='edu-container'>
            <div className='card'>
                <h3>Graduation</h3>
                <span className='bar'></span>
                <p>Course: BE Computer</p>
                <p>Institute: Marwadi University</p>
                <p>Passing Year: 2023</p>
                <p>Grade: 9.46 (CPI)</p>
                {/* <br />
                <a href='https://drive.google.com/drive/folders/1Nb5iAa_G6QfFLC8F3bFT_ukwXSYEMac3' className='edu-btn' target='_blank'>View</a>
                <p><br /></p> */}
            </div>

            <div className='card'>
                <h3>HSC</h3>
                <span className='bar'></span>
                <p>Stream: Science</p>
                <p>Institute: The School of Science</p>
                <p>Passing Year: 2019</p>
                <p>Grade: 87.07%</p>
                {/* <br/>
                <a href='https://drive.google.com/drive/folders/1Nb5iAa_G6QfFLC8F3bFT_ukwXSYEMac3' className='edu-btn' target='_blank'>View</a>
                <p><br /></p> */}
            </div>

            <div className='card'>
                <h3>SSC</h3>
                <span className='bar'></span>
                <p>Institute: Parth Vidhyalaya</p>
                <p>Passing Year: 2017</p>
                <p>Grade: 88.33%</p>
                {/* <br /><br /><br />
                <a href='https://drive.google.com/drive/folders/1Nb5iAa_G6QfFLC8F3bFT_ukwXSYEMac3' className='edu-btn' target='_blank'>View</a>
                <p><br /></p> */}
            </div>
        </div>
    </div>
  )
}

export default Education