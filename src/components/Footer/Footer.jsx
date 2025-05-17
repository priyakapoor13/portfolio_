import React from 'react'
import './Footer.css'
import logo from '../../assets/priya_logo_trimmed_max.svg'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo}alt="" />
            <p>Thanks for stopping by! Feel free to connect or say hello via email or socials.</p>
        </div>
        
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
           &copy; 2025 priya. All rights reserved.
        </p>
        <div className="footer-bottom-right">
        <div className="footer-icons">
        <a  href="mailto:priyakapoor2200@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={mail_icon} alt="GitHub" className="footer-icon" />
        </a>
        <a href="www.linkedin.com/in/priya-kapoor-862029264" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_icon} alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="https://github.com/priyakapoor13" target="_blank" rel="noopener noreferrer">
          <img src={github_icon} alt="Portfolio" className="footer-icon" />
        </a>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
