import React from 'react'
import "./Projects.scss"
import { NavLink } from 'react-router-dom';
import { FaceIcon, ImageIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'

const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <div className='projects__sub-section'>
                <div className='projects__heading'>
                    <h1>PROJECTS</h1>
                </div>
                <div className='project project__one'>
                    <a href="https://ecommercestorewebsite.vercel.app/" target='_blank' rel="noreferrer">
                        <figure className='project__image project__one-image'>
                            <img src="" alt="" />
                        </figure>
                        <div className='project__info project__one-info'>
                            <h2 className='project__info-heading project__one-info--heading'>Ecommerce App <span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span> </h2>
                            <p className='project__info-text project__one-info--text'>
                                I created an e-commerce website with React JS.
                                Fetch products from the API by fetch method to display data on the web page.
                                A single product and a cart that has a local storage to store and retrieve products.
                                Comment section for products
                                Designed UI with Vanilla CSS.

                            </p>
                            <ul className='project__info-skills project__one-info--skills'>
                                <li>JavaSccript</li>
                                <li>ReactJS</li>
                                <li>React Redux</li>
                                <li>Radix UI</li>
                            </ul>
                        </div>
                    </a>
                </div>

                <div className='project project__two'>
                    <a href="https://reactjsrecipeapp.vercel.app/" target='_blank' rel="noreferrer">
                        <figure className='project__image project__two-image'>
                            <img src="" alt="" />
                        </figure>
                        <div className='project__info project__two-info'>
                            <h2 className='project__info-heading project__two-info--heading'>Recipe App <span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></h2>
                            <p className='project__info-text project__two-info--text'>
                                Built a Recipe App with React JS.
                                Create and delete recipes with adding and deletion functionality.
                                Recipes can be search, sort and filter.
                                Recipes can be pin to stay on top.
                                Implement local storage so that you can store and retrieve data.
                                Design UI with Sass preprocessor

                            </p>
                            <ul className='project__info-skills project__two-info--skills'>
                                <li>Javascript</li>
                                <li>ReactJS</li>
                                <li>Redux Toolkit</li>
                                <li>Sass</li>
                            </ul>
                        </div>
                    </a>
                </div>


                <div className='allprojects__button'>
                    <NavLink to="/archives">View Full Archives</NavLink>
                </div>
            </div>

        </section>
    )
}

export default Projects