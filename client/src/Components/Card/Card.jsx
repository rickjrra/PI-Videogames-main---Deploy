import React from 'react';
import { Link } from 'react-router-dom';
import ratingImg from '../../assets/img/rating.png';
import style from './Card.module.css';

const Card = ({ id, background_image, name, genres, rating }) => {
  return (
    <Link to={`/videogames/${id}`} className={style.card}>
    <div className={style.cardContainer}>
      <img src={background_image} alt='description' className={style.cardImg} />
      <h1 className={style.h1Name}>{name}</h1>
      <h3 className={style.genres}>{genres}</h3>
      <h3 className={style.rating}>Rating: <img src={ratingImg} className={style.ratingImg} alt='' />{rating}</h3>
    </div>
    </Link>
  );
};

export default Card;