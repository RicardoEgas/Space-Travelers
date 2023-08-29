import { NavLink } from 'react-router-dom';
import './Header.css';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'dragons', text: 'Dragons' },
  { path: 'profile', text: 'My Profile' },
];

function Header() {
  return (
    <header>
      <h1>Space Travelers&apos; Hub</h1>
      <nav className="navbar">
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
