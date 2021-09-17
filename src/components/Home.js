import React from 'react'
import './Component.css'
import Video from './Ressources/background.mp4'



function Home() {

    return (
      <div>

        <video muted loop autoPlay>
        <source src={Video} type="video/mp4"/>
        </video>

      </div>
    )
}

export default Home
