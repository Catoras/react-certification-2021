import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './NavbarItem.styles.css';

function NavbarItem({ title, href, faIcon }) {
  let icon;

  if (faIcon === 'Star') {
    icon = <FontAwesomeIcon className="navitem-icon" icon={faStar} color="black" />;
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link className="navitem-link" to={`/${href}`}>
      {icon}
      <span className="navitem-title">{title}</span>
    </Link>
  );
}

export default NavbarItem;
