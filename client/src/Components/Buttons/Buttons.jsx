import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllGames } from '../../redux/actions/actionCreators';
import { Link } from 'react-router-dom';
import style from './Buttons.module.css';

const Buttons = () => {
    const dispatch = useDispatch();
    const location = useLocation();


    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getAllGames());
      };


  return (
    <div className={style.buttonsContainer}>
        {location.pathname === '/home' && (
  <button onClick={(event) => handleClick(event)} className={style.buttonContainer}>
    <span style={{ color: 'white' }}>REFRESCAR VIDEOGAMES</span>
  </button>
)}

        <button className={style.buttonContainer}><Link to='/home' className={style.button}>HOME</Link></button>
        <button className={style.buttonContainer}><Link to='/form' className={style.button}>CREAR VIDEOJUEGO</Link></button>
    </div>
  );
};

export default Buttons;