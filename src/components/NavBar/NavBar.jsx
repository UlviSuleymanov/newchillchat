import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';

let NavBar = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink to="profile/">Profile</NavLink>
      <NavLink to="dialogs/">Dialogs</NavLink>
    </nav>
  );
};

export default NavBar;
