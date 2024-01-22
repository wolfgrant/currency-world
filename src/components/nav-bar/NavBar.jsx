// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">Currency World</div>
      <div className="navbar-nav">
        <button
          className="nav-item"
          onClick={handleLogout}
          role="button"
          tabIndex="0"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default NavBar;