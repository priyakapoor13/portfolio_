import React from 'react';
import './Hero.css';
import profile_img from '../../assets/photo.jpg';
import resume from '../../assets/resume.pdf';

export const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* Floating bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      {/* Hero Content */}
      <img className="animate-image" src={profile_img} alt="Profile" />
      <h1 className="animate-title"><span>I'm Priya,</span> Frontend developer</h1>
      <p>
      Passionate about crafting clean, dynamic websites. I build engaging user experiences that make every click meaningful.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className="anchor-link" href="#contact">Connect with me</a>
        </div>
        <div className="hero-resume">
         <a className="anchor-link" href={resume} target="_blank" rel="noopener noreferrer">
             My resume
          </a>
        </div>
      </div>
    </div>
  );
};