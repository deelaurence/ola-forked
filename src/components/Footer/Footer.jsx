import React from 'react';
import { navLinks } from '../../data';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className='top'>
        <div className='item-1'>
          <h3>Contacts</h3>
          <ul>
            <a href={`mailto:${navLinks.mail}`}>
              <li>DEVERENCECONNECT@GMAIL.COM</li>
            </a>
            <a href={navLinks.github}>
             <li>GITHUB</li>
            </a>
            <a href={navLinks.linkedIn}>
              <li><em>LinkedIn</em></li>
            </a>
          </ul>
        </div>
        <div className='item-2'>
          <h3>Othér Links</h3>
          <div className='row'>
            <ul>
              <a href={navLinks.blog}>
                <li>MY BLOG</li>
              </a>
              <a href={navLinks.resume}>
                <li>VIEW MY RESUME</li>
              </a>
              <Link to="/about">
                <li>ABOUT ME</li>
              </Link>
            </ul>
           
          </div>
        </div>
      </div>
      <div className='bottom'>
        <p>WEBSITE DEVELOPED IN 2024 WITH REACT BY ME, DESIGN INSPIRED BY MaELEN LE MEur</p>
      </div>
    </footer>
  );
};

export default Footer;
