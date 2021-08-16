import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../providers/Auth';
import './Header.styles.css';

function Header() {
  const userIcon = <FontAwesomeIcon className="loginIcon" icon={faUser} fixedWidth />;
  const logOutIcon = (
    <FontAwesomeIcon className="loginIcon" icon={faSignOutAlt} fixedWidth />
  );

  const history = useHistory();
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      history.push(`/search/${event.target.value}`);
    }
  };

  return (
    <header className="header">
      <div className="home">
        <a className="h-100" href="/">
          <img
            className="h-100"
            src="https://1.bp.blogspot.com/-SVt0UGpLIxs/W6FDW8--ifI/AAAAAAAAOmw/9yv4ErTELKAIDbu8wLINDuAaa_LckuGuwCLcBGAs/s1600/academy-color-transparent-283x300.png"
            alt="Logo"
          />
        </a>
      </div>
      <div className="searchInput">
        <label htmlFor="search">
          <input
            name="search"
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Search"
          />
        </label>
      </div>
      {authenticated ? (
        <Link to="/" onClick={deAuthenticate}>
          {logOutIcon}
        </Link>
      ) : (
        <Link to="/login">{userIcon}</Link>
      )}
    </header>
  );
}

export default Header;
