import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem.component';
import ThemeColorSwitch from './ThemeColorSwitch/ThemeColorSwitch.component';

import './Navbar.styles.css';

function Navbar() {
  const navListItems = [{ title: 'Favorites', href: 'Favorites', faIcon: 'Star' }];

  const navbarItemElements = navListItems.map((element) => (
    <li className="navitem" key={element.title}>
      <NavbarItem title={element.title} href={element.ref} faIcon={element.faIcon} />
    </li>
  ));

  return (
    <nav className="navbar">
      <ul className="navbar-navlist">
        {navbarItemElements}
        <ThemeColorSwitch />
      </ul>
    </nav>
  );
}

export default Navbar;
