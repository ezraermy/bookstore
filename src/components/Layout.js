import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar';
import './styles/layout.css';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
