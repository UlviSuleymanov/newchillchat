import React from 'react';
import s from './footer.module.css';
const onClickDirect = () => {
  window.scrollTo(0, 0);
};

const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.address}>
        <address>street</address>
        <address>phone number</address>
      </div>
      <button className={s.btn} onClick={() => onClickDirect()}>
        Scroll up
      </button>
    </footer>
  );
};

export default Footer;
