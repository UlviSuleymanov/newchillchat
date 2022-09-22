import React from 'react';
import s from './landingpage.module.css';
import hero from '../../assets/images/hero.png';
import Info from './Info';

const LandingPage = () => {
  const [showInfo, setShowInfo] = React.useState(false);

  const handleClick = () => {
    return setShowInfo(!showInfo);
  };
  return (
    <div className={s.container}>
      <div className={s.About}>
        <h2>Welcome to ChillChat beta Version</h2>
        <p style={{ maxWidth: 500, margin: '0.25rem' }}>
          This Project has been build by Ulvi Suleymanov. While working on this project i have
          learned many new technologies, and i practiced those i already knew. This project is still
          on development stage, new functionalities will be added as i will learn more technologies.
          Such as Auth/Login real working back-end and more. You can check my other projects by
          clicking on Logo.
        </p>
        <button className={s.btn} onClick={() => handleClick()}>
          More Info
        </button>
        {showInfo ? <Info className={s.info} /> : ''}
      </div>
      <img className={s.Hero} src={hero} alt="hero" />
    </div>
  );
};

export default LandingPage;
