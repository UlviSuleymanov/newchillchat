import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css';

let NavBar = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} to="profile/">
        Profile
      </NavLink>
      <NavLink className={s.link} to="/trends">
        Trends
      </NavLink>
      <NavLink className={s.link} to="/users">
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
