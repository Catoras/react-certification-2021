import React from 'react';

import Header from '../Header';
import Navbar from '../Navbar';

import './Layout.styles.css';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}

export default Layout;
