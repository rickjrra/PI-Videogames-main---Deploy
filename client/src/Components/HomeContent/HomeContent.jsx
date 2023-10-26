import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterByCreation,
  filterByGenre,
  getAllGames,
  getAllGenres,
  orderByName,
  orderByRating,
} from '../../redux/actions/actionCreators';
import NavBar from '../NavBar/NavBar';
import style from './HomeContent.module.css';
import Paginado from '../Paginado/Paginado';
import Card from '../Card/Card';
import HomeLoader from '../HomeLoader/HomeLoader';

const HomeContent = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);
  const genres = useSelector((state) => state.genres);

  const [pagina, setPagina] = useState(1);
  const juegosPorLinea = 3; // Cambio: 3 juegos por línea
  const lineas = 5; // Cambio: 5 líneas de juegos
  const porPagina = juegosPorLinea * lineas; // Cambio: juegos por línea x líneas de juegos
  const [inputP, setInputP] = useState(1);
  const [order, setOrder] = useState('');
  const currentGames = allGames.slice(
    (pagina - 1) * porPagina,
    (pagina - 1) * porPagina + porPagina
  );

  const maximo = Math.ceil(allGames.length / porPagina);

  useEffect(() => {
    if (!allGames.length) {
      dispatch(getAllGames());
    }
    dispatch(getAllGenres());
  }, [dispatch, allGames]);

  const handleChangeByName = (event) => {
    event.preventDefault();
    dispatch(orderByName(event.target.value));
    setPagina(1);
    setInputP(1);
    setOrder(`Order by ${event.target.value}`);
  };

  const handleChangeByRating = (event) => {
    event.preventDefault();
    dispatch(orderByRating(event.target.value));
    setPagina(1);
    setInputP(1);
    setOrder(`Order by ${event.target.value}`);
  };

  const handleChangeCreation = (event) => {
    event.preventDefault();
    dispatch(filterByCreation(event.target.value));
    setPagina(1);
    setInputP(1);
  };

  const handleChangeGenres = (event) => {
    event.preventDefault();
    dispatch(filterByGenre(event.target.value));
    setPagina(1);
    setInputP(1);
  };

  return (
    <>
      <NavBar
        setPagina={setPagina}
        setInputP={setInputP}
        handleChangeByName={handleChangeByName}
        handleChangeByRating={handleChangeByRating}
        handleChangeCreation={handleChangeCreation}
        handleChangeGenres={handleChangeGenres}
        genres={genres}
      />
      <div className={style.cardsContainer}>
        {currentGames.length ? (
          currentGames.map((game) => {
            return (
              <div className={style.eachCard}>
                <Card
                  id={game.id}
                  key={game.id}
                  background_image={game.background_image}
                  name={game.name}
                  genres={game.genres.join(', ')}
                  rating={game.rating}
                />
              </div>
            );
          })
        ) : (
          <HomeLoader />
        )}
      </div>
      <Paginado
        maximo={maximo}
        pagina={pagina}
        setPagina={setPagina}
        inputP={inputP}
        setInputP={setInputP}
        className={style.paginado}
      />
    </>
  );
};

export default HomeContent;



















// const dispatch = useDispatch();
// const allGames = useSelector((state) => state.games);


// const [ pagina, setPagina ] = useState(1);
// const [ porPagina, setPorPagina ] = useState(15);
// const [ inputP, setInputP ] = useState(1);
// const currentGames = allGames.slice((pagina -1) * porPagina, (pagina - 1) * porPagina + porPagina);

// const maximo = Math.ceil(allGames.length / porPagina);



// useEffect(() => {
  
    
//     dispatch(getAllGames());
  

// },[dispatch])

// return (
//   <>
//    <NavBar  setPagina={setPagina} setInputP={setInputP} /> 
//     <Paginado maximo={maximo} pagina={pagina} setPagina={setPagina} inputP={inputP} setInputP={setInputP} className={style.paginado}/>
//   <div className={style.cardsContainer}>
//     {
//      currentGames.length?
//      currentGames.map((game) => {

//         return(
//           <div className={style.eachCard}>
//             <Card
//               id={game.id}
//               key={game.id}
//               background_image={game.background_image}
//               name={game.name}
//               genres={game.genres}
//               rating={game.rating}
//             />
//           </div>
//         );
//       }) : <HomeLoader />
//     }
    
//   </div>
     
//   </>
// );














