import React from 'react';
import previousButton from '../../assets/img/previousButton.png';
import nextButton from '../../assets/img/nextButton.png';
import style from './Paginado.module.css';


const Paginado = ({ maximo, pagina, setPagina, inputP, setInputP }) => {


  const handleNextPage = () => {
    setInputP(inputP + 1);
    setPagina(pagina + 1);
  };

  const handlePreviousPage = () => {
    setInputP(inputP - 1);
    setPagina(pagina - 1);
  };

  const onChange = (event) => {
    setInputP(event.target.value);
  };

  const onKeyDown = (event) => {
    if(event.keyCode === 13) {
      setPagina(parseInt(event.target.value));
      if(
        parseInt(event.target.value ) < 1 || 
        parseInt(event.target.value) > Math.ceil(maximo) || 
        isNaN(parseInt(event.target.value))
      ) {
        setPagina(1);
        setInputP(1);
      } else {
        setPagina(parseInt(event.target.value));
      }
    }
  }


  return (
    <div className={style.container}>
      <button onClick={handlePreviousPage} className={style.previousButton} disabled={pagina === 1 || pagina < 1}>
        <img src={previousButton}  alt='' className={style.previousImg} />
      </button>
        <input type="text" value={inputP} onChange={(event) => onChange(event)} onKeyDown={(event) => onKeyDown(event)} className={style.input} />
        <p className={style.paginasContainer}>de {maximo}</p>
      <button onClick={handleNextPage} className={style.nextButton} disabled={pagina === Math.ceil (maximo) || pagina > Math.ceil (maximo)}>
        <img src={nextButton}  alt='' className={style.nextImg} />
      </button>
    </div>
  );
};

export default Paginado;