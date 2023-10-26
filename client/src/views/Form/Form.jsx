import React from 'react';
import CreateGame from '../../Components/CreateGame/CreateGame';
import style from './Form.module.css';
import NavBar from '../../Components/NavBar/NavBar';

const Form = () => {
  return (
    <div className={style.formContainer}>
      <NavBar />
        <CreateGame />
    </div>
  );
};

export default Form;