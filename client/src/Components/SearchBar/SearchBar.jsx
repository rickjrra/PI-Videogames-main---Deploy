import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGameByName } from '../../redux/actions/actionCreators';
import style from './SearchBar.module.css'

const SearchBar = ({ setPagina, setInputP }) => {
  const dispatch = useDispatch();
  const [ input, setInput ] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    dispatch(getGameByName(input));
    setPagina(1);
    setInputP(1);
  };

  const onKeyDown = (event) => {
    event.keyCode === 13 ? 
    handlerSubmit(event) :
    setInput(input)
  };
  
  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };


  return (
    <div className={style.searchBarContainer}>
  <div>
    <label htmlFor="searchGame" className={style.label}>
      Buscar Videogame:
    </label>
    <input
      type="search"
      id="searchGame"
      value={input}
      onChange={(event) => handleChange(event)}
      onKeyDown={(event) => onKeyDown(event)}
      className={style.input}
    />
    <button type="submit" onClick={(event) => handlerSubmit(event)} className={style.button}>
      <img src="./search.ico" alt="Buscar" className={style.icon} />
    </button>
  </div>
</div>


  );
};

export default SearchBar;