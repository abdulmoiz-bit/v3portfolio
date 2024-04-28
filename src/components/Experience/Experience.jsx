import React from 'react'
import "./Experience.scss"

const Experience = () => {
    return (
        <section className='experience' id='experience'>
            <div className='experience__sub-section'>
                <div className='experience__heading'>
                    <h1>EXPERIENCE</h1>
                </div>
                <div className='experience__first'>
                    <h3 className='experience__first-duration'></h3>
                    <div className='experience__first-info'>
                        <h2 className='experience__first-heading'>Freelance Developer</h2>
                        <p className='experience__first-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A beatae quam perspiciatis accusantium maiores?</p>
                        <ul className='experience__first-skills'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>

                <div className='experience__second'>
                    <h3 className='experience__second-duration'></h3>
                    <div className='experience__second-info'>
                        <h2 className='experience__second-heading'>Experience Developer</h2>
                        <p className='experience__second-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A beatae quam perspiciatis accusantium maiores?</p>
                        <ul className='experience__second-skills'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className='resume'>
                    <a href="">View Full Resume <span></span></a>
                </div>
            </div>
        </section>
    )
}

export default Experience;