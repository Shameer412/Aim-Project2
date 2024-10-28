import React, { useEffect, useState } from 'react';
import './Hero_Banner.css';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
const Hero_Banner = () => {
  const words = ['CREATE', 'INNOVATE', 'COLLABORATE', 'ORNATE'];
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  return (
    <div className="hero-banner-container">
      <div className="hero-banner-content">
        {/*  Particles container Animation*/}
        <div className="Particles-container" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
  {init && (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: { enable: false }, // Disable fullscreen to confine particles to the container
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: false, mode: "repulse" },
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            push: { quantity: 30 },
            repulse: { distance: 200, duration: 0.6 },
          },
        },
        particles: {
          color: { value: "#FFE" },
          links: {
            color: "#FFFF",
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1.2,
          },
          number: { density: { enable: true, area: 800 }, value: 300 },
          opacity: { value: 0.8 },
          shape: { type: "circle" },
          size: { value: { min: 3, max: 5 } },
        },
        detectRetina: false,
      }}
    />
  )}
</div>

        {/* Text  Container */}
        <div className='Text-banner'>
        <h1>
      we{' '}
      <span style={{ color: '#ED1C24' }}>
        <Typewriter
          words={words}
          loop={0} // Infinite loop (set to 'false' to disable looping)
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000} // Delay between words
        />
      </span>
    </h1>
    <p>Elevating advertising experience by stretching every possibility</p>
    {/* Buttons */}
    <div className="hero-btn-wrapper">
     <Link to='/contact'> <button className=" hero-btn1  ">Contact Us</button></Link>
      <button className=" hero-btn2">Portfolio</button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_Banner;
