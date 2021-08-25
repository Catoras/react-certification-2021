import React from 'react';

import Header from '../Header';
import Navbar from '../Navbar';

import { useStore } from '../../store/StoreProvider';

import './Layout.styles.css';

function Layout({ children }) {
  const { isDark } = useStore();
  const root = document.getElementsByTagName('html');

  if (isDark) {
    root[0].style.background = '#181818';
  } else {
    root[0].style.background = '#F9F9F9';
  }

  return (
    <div className={`${isDark ? 'dark-theme' : 'light-theme'} content-container`}>
      <Header />
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
