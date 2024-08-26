import React, { useState } from 'react';
import './MenuIcon.css'; // Assuming you keep the CSS in a separate file

const MenuIcon = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="demo">
      <div className={`menu-icon ${isActive ? 'active' : ''}`} onClick={handleToggle}>
        <input className="menu-icon__checkbox" type="checkbox" checked={isActive} readOnly />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default MenuIcon;
