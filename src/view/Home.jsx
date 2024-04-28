import React from 'react'
import Header from '../components/Header';
import Main from "../components/Main";
import "./Home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Main/>
    </div>
  )
}

export default Home