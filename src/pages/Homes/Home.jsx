import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import banner from '../../assets/cards/diana.avif'
import play from '../../assets/cards/play1.png'
import info from '../../assets/cards/more_info.png'
import title from '../../assets/cards/crown.jpeg'
import Titlecards  from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'



const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='hero'>
          <img src= {banner} alt="" className='banner-img'/>
          <div className="hero-caption">
            <img src={title} alt="" className='caption-img' />
            <p>Discovering his ties to a secret ancient order,a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy. </p>
             <div className="hero-btns">
              <button className='btn'><img src={play} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info} alt="" />More Info</button>
             </div>
            <Titlecards/>
          </div>
        </div>
        <div className='more-cards'>
          <Titlecards title={"Blockbuster Movies"} category={"top_rated"}/>
          <Titlecards  title={"Only on Netflix"} category={"popular"}/>
          <Titlecards  title={"Upcoming"} category={"upcoming"}/>
          <Titlecards  title={"Topics for you"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home