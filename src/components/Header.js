import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './Header.css';

export const links = [
  { path: '/', text: 'Rockets' },
  { path: '/missions', text: 'Missions' },
  { path: '/profile', text: 'My Profile' },
];

function Header() {
  return (
    <header>
      <h1>Space Travelers&apos; Hub</h1>
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={uuid()}>
              <NavLink to={link.path} className="pending">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
