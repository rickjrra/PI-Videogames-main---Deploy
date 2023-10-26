import React from 'react';
import style from './Filter.module.css';


const Filter = ({ handleChangeByName, handleChangeByRating, handleChangeCreation, handleChangeGenres, genres}) => {


  return (
    <div className={style.filterContainer}>
      <div className={style.filGames}>
        <label htmlFor="allGames" className={style.label}>VIDEOGAMES
        <select name="filterByCreation" id="allGames" onChange={(event) => handleChangeCreation(event)} className={style.select}> 
          <option value="DEFAULT" disabled selected hidden>GAMES</option> 
          <option value="existing"className={style.option}>DISPONIBLES</option>
          <option value="created"className={style.option}>CREADOS</option>
        </select>
        </label>
      </div>


      <div className={style.filGenres}>
        <label htmlFor="allGenres" className={style.label}>GENEROS 
        <select name="filterByGenre" id="allGenres" onChange={(event) => handleChangeGenres(event)} className={style.select}>
          <option value="DEFAULT" disabled selected hidden>GENEROS</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Arcade">Arcade</option>
          <option value="Board Games">Board Games</option>
          <option value="Card">Card</option>
          <option value="Casual">Casual</option>
          <option value="Educational">Educational</option>
          <option value="Family">Family</option>
          <option value="Fighting">Fighting</option>
          <option value="Indie">Indie</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Platformer">Platformer</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Racing">Racing</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
          <option value="Strategy">Strategy</option>
        </select>
        </label>
      </div>

      <div className={style.names}>
        <label htmlFor="orderByName" className={style.label}>ORDENAR POR NOMBRE
        <select name="orderByName" id="orderByName" onChange={event => handleChangeByName(event)} className={style.select}>
          <option value="" disabled hidden selected>ALFABETICO</option>
          <option value="ASC" className={style.option}>A-Z</option>
          <option value="DESC" className={style.option}>Z-A</option>
        </select> 
        </label>
      </div>


      <div className={style.rating}>
        <label htmlFor="orderByRating" className={style.label}>ORDENAR POR RATING 
        <select name="orderByRating" id="orderByRating" onChange={event => handleChangeByRating(event)} className={style.select}>
          <option value="" disabled hidden selected>RATING</option>
          <option value="ASC" className={style.option}>min. rating</option>
          <option value="DESC" className={style.option}>max. rating</option>
        </select>
        </label>
      </div>


    </div>
  );
};

export default Filter;


















