import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
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
        <div className='logo'>Olá</div>
        <div className='desktop-links'>
          <ul>
            <li>VOUSVOUS </li>
            <li>RÉALISATION</li>
            <li>ÉCRIVEZ-MOI</li>
          </ul>
        </div>
        <div className='hambuger' onClick={() => setShowNavbar(!showNavbar)}>
          <span className={showNavbar ? `show-nav` : null}></span>
        </div>
      </div>
      <div className={`mob-nav-links ${showNavbar ? `show-nav` : null}`}>
        <ul>
          <li>Vous</li>
          <li>Réalisations</li>
          <li>Écrivez-moi</li>
        </ul>
        <ul className='socials'>
          <li>MAELANLEMEUR@GMAIL.COM</li>
          <li>INSTAGRAM</li>
          <li>BEHANCE</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
