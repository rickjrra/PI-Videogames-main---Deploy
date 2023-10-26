import React from 'react';
import LandingPage from '../../Components/LandingPage/LandingPage.jsx';
import style from './Landing.module.css';



const Landing = () => {
  return (
    <div className={style.landingContainer}>
      <LandingPage />
    </div>
  );
};

export default Landing;