import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useStore, useDispatch } from '../../../store/StoreProvider';
import './ThemeColorSwitch.styles.css';
import { types } from '../../../store/storeReducer';

function ThemeColorSwitch() {
  const store = useStore();
  const dispatch = useDispatch();
  const { isDark } = store;

  const sunIcon = <FontAwesomeIcon className="navitem-icon" icon={faSun} />;
  const moonIcon = <FontAwesomeIcon className="navitem-icon" icon={faMoon} />;

  const handleClick = () => {
    dispatch({ type: types.TOGGLE_THEME_MODE });
  };

  return (
    <li className="navitem" key="ThemeSwitcher">
      <button type="button" onClick={handleClick} className="navitem-link navitem-button">
        {isDark ? moonIcon : sunIcon}
        <span className="navitem-title">{isDark ? 'Dark' : 'Light'}</span>
      </button>
    </li>
  );
}

export default ThemeColorSwitch;
