import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './header.module.css';
const Header = () => {
  const isUser = true;
  const list = ['Sign In', 'Sign Up'];
  return (
    <header>
      <h4 className={s.logo}>Chillchat</h4>
      {isUser ? <NavBar /> : list.map((item) => <button className={s.button}>{item}</button>)}
    </header>
  );
};

export default Header;
