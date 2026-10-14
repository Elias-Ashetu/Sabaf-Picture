
import React from 'react'
import './home.css'
import heroImage from '../../assets/images/hero.jpg'
import Logo1 from '../../assets/images/logo.jpg'
import { Navbar } from '../../component/layout/navbar'
export const Home = () => {
  return (
    <section className="hero-container"
    style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Navbar />
<div className="logo-container">
    <div className="brand-container">
    <img src={Logo1} alt="Brand Logo" className="brand" />
    <span>
          <b>SABAF</b>
          <span className="picture2"> PICTURE</span>
        </span>
        </div>
        <div className="paragraph">
            <h1>Stories Told Through</h1>
            <h1 className="subheader">Photography</h1>
            <p>Professional photography capturing emotion, beauty, and truth in every frame.</p>
        </div>
        <div className="buttons">
            <button className="book-session">Book Session</button>
            <button className="view-gallery">View Gallery</button>
        </div>
</div>
    </section>
  )
}
