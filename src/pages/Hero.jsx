import React from 'react'
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import GalleryDemo from '../components/Gallerysection/GalleryDemo';


function Hero() {

  // use navigate 
  const navigate = useNavigate();

  // handleButtonClick
  const handleButtonClick = () => {
    navigate('/gallery'); // Navigate to the /gallery route
  };

  return (
     <>
       <div className="hero-section">
        <div className="overlay">
          <div className="hero-content container text-center">
            <h1>Click memories without limits</h1>
            <p>Explore a stunning collection of images from around the world</p>
            <button onClick={handleButtonClick} className="btn btn-dark fw-bolder">View Gallery</button> 
          </div>
        </div>
      </div>

      <div>
        <GalleryDemo/>
      </div>

     </>
    
  )
}

export default Hero;