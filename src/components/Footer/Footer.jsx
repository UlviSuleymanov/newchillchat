import React from 'react';
import s from './footer.module.css';

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.address}>
        <address>street</address>
        <address>phone number</address>
      </div>
      <button>To scroll top</button>
    </div>
  );
};

export default Footer;
