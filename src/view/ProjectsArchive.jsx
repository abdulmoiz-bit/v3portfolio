import React from 'react'
import "./ProjectsArchive.scss"
import { ArrowTopRightIcon } from '@radix-ui/react-icons'

const ProjectsArchive = () => {
  return (
    <div className='projects-archive'>
      <div className='all-projects'>
        <div>
          <h2><a href="">Back</a></h2>
          <h1 style={{paddingTop: "1rem"}}>All Projects</h1>
        </div>
        <table className='projectstable'>
          <thead className='projectstable__head'>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Built With</th>
              <th>Links</th>
            </tr>
          </thead>

          <tbody className='projectstable__body'>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>Ecommerce Website <span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>React Redux</li>
                  <li>Radix UI</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href="https://ecommercestorewebsite.vercel.app/" target='blank'><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>Recipe App<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>Redux Toolkit</li>
                  <li>Sass</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href="https://reactjsrecipeapp.vercel.app/" target='blank'><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>Sportfolio<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>ReactJS</li>
                  <li>HTML & CSS</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href="https://sportfoliowebsite.vercel.app/" target='blank'><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>AI App<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>HTML & CSS</li>
                  <li>Material UI</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href=""><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>Travel Advisor App<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>HTML & CSS</li>
                  <li>Material UI</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href=""><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>News App<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>HTML & CSS</li>
                  <li>Material UI</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href=""><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr> 
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>Admin Dashboard<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>HTML & CSS</li>
                  <li>Material UI</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href=""><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>Movie App<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>HTML & CSS</li>
                  <li>Material UI</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href=""><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
            <tr className='projectstable__row'>
              <td className='projectstable__row-text'>Animation Website<span className='link'><a href=""></a></span></td>
              <td className='projectstable__row-text'>Completed</td>
              <td>
                <ul>
                  <li>JavaSccript</li>
                  <li>ReactJS</li>
                  <li>HTML & CSS</li>
                  <li>Material UI</li>
                </ul>
              </td>
              <td className='projectstable__row-text'>
                <a href=""><span style={{color: "rgb(121, 206, 121)"}}><ArrowTopRightIcon/></span></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectsArchive