import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='top'>
        <div className='item-1'>
          <h3>Contacts</h3>
          <ul>
            <li>MAELANLEMEUR@GMAIL.COM</li>
            <li>INSTAGRAM</li>
            <li>BEHANCE</li>
          </ul>
        </div>
        <div className='item-2'>
          <h3>Crédits</h3>
          <div className='row'>
            <ul>
              <li>QUENTIN HOCDÉ</li>
              <li>MAËLAN LE MEUR</li>
              <li>PANGRAM PANGRAM</li>
            </ul>
            <ul>
              <li>DÉVELOPPEMENT</li>
              <li>DA & DESIGN</li>
              <li>TYPOGRAPHIE</li>
            </ul>
          </div>
        </div>
        <div className='item-3'>
          <h3>Contacts</h3>
        </div>
      </div>
      <div className='bottom'>
        <p>WEBSITE CREATED IN 2023 AT EXTENSION (DO IT YOURSELF) , BRUSSELS.</p>
      </div>
    </footer>
  );
};

export default Footer;
