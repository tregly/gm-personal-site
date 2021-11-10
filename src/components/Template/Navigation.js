import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <nav className="links navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          {routes.filter((l) => l.index).map((l) => (
            <Link key={l.label} to={l.path}>{l.label}</Link>
          ))}
        </li>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label} className="nav-item">
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
