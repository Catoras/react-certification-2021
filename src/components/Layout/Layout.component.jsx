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

// Dark:
// background: #181818
// color: #fff
// Navbar: background: #212121
// 	Iconos y textos#909090
// 	background en hover: #303030
// Header: background #323232

// Input de busqueda:
// 	background:#181818
// 	placeholder: #909090

// Ligth:
// background: #F9F9F9
// color: #030303
// Navbar: background: #FFF
// 	Iconos y textos#606060
// 	background en hover: #ECECEC
// Header: background #FFF

// Input de busqueda:
// 	background:#FFF
// 	placeholder: #909090
