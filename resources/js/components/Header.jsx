import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <div className="container d-flex align-items-center justify-content-between" style={{ paddingLeft: '74px', paddingRight: '74px' }}>
        <h1 className="logo" style={{ fontWeight: 'bold' }}><a href="/welcome">TRAVELIT</a></h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="./#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="./#category">Category</a></li>
            <li><a className="nav-link scrollto" href="/manage">Manage</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Header;