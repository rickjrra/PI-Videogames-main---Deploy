import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.buttonContainer}> {/* Agregamos el contenedor */}
        <button className={style.button}><Link to='/home' className={style.link}>START</Link></button>
      </div>
    </div>
  );
};

export default LandingPage;