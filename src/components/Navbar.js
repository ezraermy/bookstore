import { NavLink } from 'react-router-dom';
import './styles/navbar.css';
import Icon from './styles/Icon.png';

const Navbar = () => {
  const links = [
    { path: 'categories', text: 'CATEGORIES' },
    { path: '/', text: 'BOOKS' },
  ];
  return (
    <div className="navbar">
      <h2 className="nav-title">Bookstore CMS</h2>
      <ul>
        {links.map((link) => (
          <li key={link.text} className="navlink">
            <NavLink to={link.path} className="link">{link.text}</NavLink>
          </li>
        ))}
      </ul>
      <img src={Icon} alt="icon" className="icon" />
    </div>
  );
};

export default Navbar;
