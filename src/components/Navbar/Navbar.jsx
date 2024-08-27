import React, { useEffect, useState } from 'react';
import MenuIcon from './MenuIcon';
import {HiMenuAlt3} from "react-icons/hi"
import {IoClose} from "react-icons/io5"
import { Link } from 'react-router-dom';
import { navLinks } from '../../data';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const monitorScrollHeight = () => {
      setScrollHeight(window.scrollY);

    };
    window.addEventListener(`scroll`, monitorScrollHeight);
    return () => {
      window.removeEventListener(`scroll`, monitorScrollHeight);
    };
  }, []);

  return (
    <nav
      className={`${showNavbar ? `show-nav` : null} ${
        scrollHeight > 600 ? `fix-nav` : null
      }`}
    >
      <div className='container'>
        <Link to={'/'} className='logo'>Odúnayò</Link>
        
        <div className='desktop-links'>
          <ul>
            <a>MY BLOG </a>
            <a>ABOUT ME</a>
            <a>RÉSUMÉ</a>
          </ul>
        </div>
        <div className='hambuger' onClick={() =>{ 
            setAnimate(!animate)
            setShowNavbar(!showNavbar)}
          }>
          {!showNavbar?<HiMenuAlt3/>:<IoClose/>}
        </div>
      </div>
      <div onClick={()=>{setShowNavbar(false)}} className={`mob-nav-links ${showNavbar ? `show-nav` : null}`}>
        <ul>
          <li>
            <a href={navLinks.blog} className={animate?`nav-text`:""}>My blog</a>
          </li>
          <li>
            <a href={navLinks.resume} className={animate?`nav-text1`:""}>Résumé</a>
          </li>
          <li>
            <Link to={"/about"} className={animate?`nav-text2`:""}>About me</Link>
          </li>
        </ul>
        <ul className='socials'>
          <li>
            <a href={`mailto:${navLinks.mail}`} className={animate?`nav-text2`:""}>deverenceconnect@gmail.com</a>
          </li>
          <li>
            <a href={navLinks.blog} className={animate?`nav-text`:""}>Blog</a>
          </li>
          <li>
            <a href={navLinks.linkedIn} className={animate?`nav-text1`:""}>LinkedIn</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
