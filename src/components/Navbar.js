import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

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
    </div>
  );
};

export default Navbar;
