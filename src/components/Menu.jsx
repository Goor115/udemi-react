import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'lightyellow', textDecoration: 'none' } : {}
        }
        to="."
        end
      >
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;
