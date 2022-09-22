import React from 'react';
import error from '../../assets/images/ErrorHero.png';
import s from './error.module.css';

const ErrorPage = () => {
  return (
    <div className={s.container}>
      <h3 className={s.h3}>Seem's like something went wrong or adress not found.</h3>
      <img className={s.hero} src={error} alt="error" />
    </div>
  );
};

export default ErrorPage;
