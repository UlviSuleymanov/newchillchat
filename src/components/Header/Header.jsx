import React from 'react';
import logo from '../../assets/images/ChillChat.png';
import s from './header.module.css';
const Header = () => {
  const isUser = true;
  const list = ['Sign in', 'Sign up'];
  return (
    <header>
      <img className={s.logo} src={logo} alt="logo" />
      {isUser ? '' : list.map((i) => <button className={s.button}>{i}</button>)}
    </header>
  );
};

export default Header;
