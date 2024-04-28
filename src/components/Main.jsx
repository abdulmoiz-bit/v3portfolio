import React from 'react'
import './Main.scss'
import About from './About/About'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Footer from './Footer/Footer'

const Main = () => {
    return (
        <div className='main'>
            <div>
                <About />
                <Projects />
                <Experience />
                <Footer />
            </div>
        </div>
    )
}

export default Main;