import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import './ThemeColorSwitch.styles.css';

function ThemeColorSwitch() {
  const sunIcon = <FontAwesomeIcon className="navitem-icon" icon={faSun} color="black" />;
  const moonIcon = (
    <FontAwesomeIcon className="navitem-icon" icon={faMoon} color="black" />
  );
  const [icon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon(!icon);
  };

  return (
    <li className="navitem" key="ThemeSwitcher">
      <button type="button" onClick={handleClick} className="navitem-link navitem-button">
        {icon ? sunIcon : moonIcon}
        <span className="navitem-title">{icon ? 'Light' : 'Dark'}</span>
      </button>
    </li>
  );
}

export default ThemeColorSwitch;
