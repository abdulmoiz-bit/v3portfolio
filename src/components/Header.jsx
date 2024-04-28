import React from 'react'
import './Header.scss'
//import github from "../assets/images/github.png";
//import x from "../assets/images/x.png";
//import linkedin from "../assets/images/linkedin.png";
//import instagram from "../assets/images/instagram.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
/*
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                //document.querySelector(".active")
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });
    };
*/
    return (
        <section className='header'>
            <header>
                <div className='header__headings'>
                    <h1>Abdul Moiz Rashid</h1>
                    <h3>Front End Engineer</h3>
                </div>
                <div className='header__intro'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur.
                    </p>
                </div>
                <nav className='header__nav'>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                    </ul>

                </nav>
                <div className='header__links'>
                    <div>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>   
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>   
                </div>
            </header>
        </section>
    )
}

export default Header