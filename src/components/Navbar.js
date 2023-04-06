import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Books' },
    { path: 'categories', text: 'Categories' },
  ];
  return (
    <div className="navbar">
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
