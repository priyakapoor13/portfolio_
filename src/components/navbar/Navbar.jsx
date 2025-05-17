import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/priya_logo_trimmed_max.svg';
import menu_icon from '../../assets/menu_icon.svg';
import menuclose_icon from '../../assets/menuclose_icon.svg';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-3500px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <img src={menu_icon} onClick={openMenu} alt="menu" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img src={menuclose_icon} onClick={closeMenu} alt="close" className="nav-mob-close" />

        <li>
          <a className="anchor-link" href="#home">
            Home
          </a>
        </li>

        <li>
          <a className="anchor-link" href="#about">
            About me
          </a>
        </li>

        <li>
          <a className="anchor-link" href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a className="anchor-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-connect">
        <a className="anchor-link" href="#contact">
          Connect with me
        </a>
      </div>
    </div>
  );
};

export default Navbar;


