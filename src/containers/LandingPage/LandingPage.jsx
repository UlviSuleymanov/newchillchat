import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import s from './landingpage.module.css';

const LandingPage = () => {
  return (
    <div className={s.container}>
      <Header className={s.Header} />

      <Footer className={s.Footer} />
    </div>
  );
};

export default LandingPage;
