import React from 'react'
import'./home.css'
import video from '../../Assets/plane-video.mp4'

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type ="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv"></div>
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Vacation</h1>

      </div>

    </section>
  )
}

export default Home