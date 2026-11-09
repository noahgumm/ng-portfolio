import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa6';
import headshot from '../images/headshot.png';
import '../styles/Intro.css';

export default function Intro() {
  const carouselItems = 2;
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [userInteracted, setUserInteracted] = useState(false);

  function increaseIndex() {
    setUserInteracted(true);
    setCarouselIndex(prev => (prev >= carouselItems ? 1 : prev + 1));
  }

  function decreaseIndex() {
    setUserInteracted(true);
    setCarouselIndex(prev => (prev <= 1 ? carouselItems : prev - 1));
  }

  useEffect(() => {
  if (userInteracted) return;

  const interval = setInterval(() => {
      setCarouselIndex(prev => (prev >= carouselItems ? 1 : prev + 1));
    }, 5000); // 5 seconds
      return () => clearInterval(interval);
    }, 
      [userInteracted, carouselItems]
    );

  return (
    <div className="intro-section" id="about">
      <div className="intro-carousel">
        <button className="intro-backButton" onClick={decreaseIndex}><FaArrowLeft /></button>

        <div className={`intro-carousel-item ${carouselIndex === 1 ? 'active' : ''}`}>
          <h1 className="intro-title">Software<br />Developer</h1>
        </div>

        <div className={`intro-carousel-item ${carouselIndex === 2 ? 'active' : ''}`}>
            <p className="intro-subtitle">Step into my world of code</p>
            <img src={headshot} alt="headshot" className="intro-profile-pic" />
            <div className="intro-icon-row">
                <a href="#projects" className="intro-iconLink">
                    <FaBookOpen className="intro-icon" />
                    <span>Projects</span>
                </a>
                <a href="https://www.linkedin.com/in/noah-gumm/" target="_blank" rel="noopener noreferrer" className="intro-iconLink">
                    <FaLinkedin className="intro-icon" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/noahgumm" target="_blank" rel="noopener noreferrer" className="intro-iconLink">
                    <FaGithub className="intro-icon" />
                    <span>GitHub</span>
                </a>
            </div>
        </div>

        <button className="intro-forwardButton" onClick={increaseIndex}><FaArrowRight /></button>
      </div>
    </div>
  );
}