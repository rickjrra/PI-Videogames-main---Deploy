import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, postNewGame } from '../../redux/actions/actionCreators';
import { useNavigate } from 'react-router-dom';
import style from './CreateGame.module.css';

const CreateGame = () => {

    /* ------------ESTADOS Y USEEFFECT----------------- */
    const [ form, setForm ] = useState({
        name: '',
        background_image: '',
        description:'',
        platforms: [],
        released: '',
        rating: 0,
        genres: []
    });

    const [errors, setErrors] = useState({
        name: '',
        background_image: '',
        description:'',
        platforms: '',
        released: '',
        rating: '',
        genres: ''
    })

    let platforms = ["PS4", "PS5", "PC", "SEGA", "NINTENDO 64", "NINTENDO SWITCH", "ATARI", "XBOX ONE", "XBOX X", "GAME BOY ADVANCED"];
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const genres = useSelector((state) => state.genres);

  

    useEffect(() => {
        if (!genres.length) {
            dispatch(getAllGenres());
        }
    },[dispatch, genres]);
    



    /* -----------------HANDLERS---------------- */
    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [property]: value });
        
        if(!errors.length){
           return setErrors({[property]:''}); 
        }
        
        
    };


// ...

const translations = {
    'Please fill this field': 'Por favor, complete este campo',
    'Please put a valid URL for an image': 'Por favor, ingrese una URL válida para una imagen',
    'Please enter a description': 'Por favor, ingrese una descripción',
    'Please enter a release date': 'Por favor, ingrese una fecha de lanzamiento',
    'Please put a rating': 'Por favor, ingrese una calificación',
    'Please put a rating between 1 and 5': 'Por favor, ingrese una calificación entre 1 y 5',
    'Please put platforms between 1 and 5': 'Por favor, seleccione entre 1 y 5 plataformas',
    'Please put genres between 1 and 5': 'Por favor, seleccione entre 1 y 5 géneros',
};

// ...

const handleSubmit = (event) => {
    event.preventDefault();

    if (form.name.trim() === '' || form.name > 10) {
        setErrors({ ...errors, name: translations['Please fill this field'] });
    } else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)/i.test(form.background_image)) {
        setErrors({ ...errors, background_image: translations['Please put a valid URL for an image'] });
    } else if (form.description.trim() === '') {
        setErrors({ ...errors, description: translations['Please enter a description'] });
    } else if (form.released === '') {
        setErrors({ ...errors, released: translations['Please enter a release date'] });
    } else if (form.rating === 0) {
        setErrors({ ...errors, rating: translations['Please put a rating'] });
    } else if (form.rating > 5) {
        setErrors({ ...errors, rating: translations['Please put a rating between 1 and 5'] });
    } else if (form.platforms.length === 0 || form.platforms.length > 5) {
        setErrors({ ...errors, platforms: translations['Please put platforms between 1 and 5'] });
    } else if (form.genres.length === 0 || form.genres.length > 4) {
        setErrors({ ...errors, genres: translations['Please put genres between 1 and 5'] });
    } else {
        dispatch(postNewGame(form));
        navigate('/home');
    }
};

// ...

    
    const initialFormState = {
        name: '',
        background_image: '',
        description: '',
        platforms: [],
        released: '',
        rating: 0,
        genres: []
    };
    
    const handleReset = (event) => {
        event.preventDefault();
        setForm(initialFormState);
        window.location.reload(); // Esto recargará la página
    };
    
    
    
    const handleClickG = (event) => {
        if (event.target.checked) {
            setForm({ ...form, genres: [...form.genres, event.target.value] });
        } else {
            setForm({ ...form, genres: form.genres.filter((gen) => gen.name !== event.target.value)});
        }   
    };
    
    const handleClickP = (event) => {
        if (event.target.checked) {
            setForm({ ...form, platforms: [...form.platforms, event.target.value] });
        } 
         else{
            setForm({ ...form, platforms: form.platforms.filter((platform) => platform !== event.target.value) });
        }   
    };
    

  return (
    
<form onSubmit={(event) => handleSubmit(event)} onReset={(event) => handleReset(event)} className={style.form}>
<fieldset className={style.fieldset}>
<legend className={style.legend}>CREAR VIDEOJUEGO</legend>

<div className={style.container}>
    <input type="text" id='name' value={form.name} name='name' onChange={(event) => handleChange(event)} className={style.inputtext} />
    <label htmlFor="name" className={style.labeltext}>Nombre: </label> {/* Cambiado a "Nombre" */}
    <p className={style.error}>{errors.name}</p>
</div>

<div className={style.container}>
    <input type="text" id='image' value={form.background_image} name='background_image' onChange={(event) => handleChange(event)} className={style.inputtext} />
    <label htmlFor="image" className={style.labeltext}>Imagen: </label> {/* Cambiado a "Imagen" */}
    <p className={style.error}>{errors.background_image}</p>
</div>

<div className={style.textareaContainer}>
    <label htmlFor="description" className={style.label}>Descripción: </label> {/* Cambiado a "Descripción" */}
    <textarea id="description" cols="30" rows="10" value={form.description} name='description' onChange={(event) => handleChange(event)} className={style.textarea} />
    <p className={style.error}>{errors.description}</p>
</div>

<div>
    <label htmlFor="platforms" className={style.labelCb}>Plataformas: </label> {/* Cambiado a "Plataformas" */}
    {
        platforms?.sort().map((platform) => {
            return (
                <div id="platforms" className={style.checkBox}>
                    <input type="checkbox" value={platform} name='platforms' onClick={(event) => handleClickP(event)} className={style.input} />
                    <label htmlFor="platform" className={style.labelsPyG}>{platform}</label>
                </div>
            );
        })
    }
    <p className={style.error}>{errors.platforms}</p>
</div>

<div>
    <label htmlFor="released" className={style.label}>Fecha de lanzamiento: </label> {/* Cambiado a "Fecha de lanzamiento" */}
    <input type="date" id="released" value={form.released} name='released' onChange={(event) => handleChange(event)} className={style.input} />
    <p className={style.error}>{errors.released}</p>
</div>

<div>
    <label htmlFor="rating" className={style.labelCb}>Clasificación: </label> {/* Cambiado a "Clasificación" */}
    <input type="number" id="rating" value={form.rating} name='rating' onChange={(event) => handleChange(event)} min='0' step='0.5' className={style.input} />
    <p className={style.error}>{errors.rating}</p>
</div>

<div>
    <label htmlFor="genres" className={style.labelCb}>Géneros: </label> {/* Cambiado a "Géneros" */}
    {genres.sort((a, b) => (a.name > b.name ? 1 : -1)).length ? (
        genres.map((genre) => {
            return (
                <div className={style.checkBox} key={genre.id}>
                    <label htmlFor={genre.name} className={style.labelsPyG}>{genre.name}</label>
                    <input type="checkbox" id={genre.name} value={genre.name} onClick={(event) => handleClickG(event)} className={style.input} />
                </div>
            );
        })
    ) : (
        <div className={style.hypnotic}></div>
    )}
    <p className={style.error}>{errors.genres}</p>
</div>


            
        </fieldset>
        <input type="submit" value="CREAR" className={style.buttons} />
        <input type="reset" value="RESET" onClick={handleReset} className={style.buttons} />

    </form>
  );
};

export default CreateGame;