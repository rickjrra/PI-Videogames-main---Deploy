const { Router } = require("express");
const { gamesSaved, getGameById, getGameByName, postGame, validatePostData } = require('../utils/reqVideogames');



const videogamesRouter = Router();

//ESTA RUTA TRAE LA INFO DE TODOS LOS VIDEOJUEGOS Y FILTRA POR NOMBRE
videogamesRouter.get('/', async (req, res) => {
    const { name } = req.query;
    const allGames = await gamesSaved();
    try {
        if(name){
            const game = await getGameByName(name.toLocaleLowerCase()); // toLocaleLowerCase convierte el string en miniscula
            res.status(200).json(game);
        } else {            
            res.status(200).json(allGames);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//ESTA RUTA TRAE LA INFO DE UN VIDEOJUEGO DETERMINADO POR ID
videogamesRouter.get('/:idVideogame', async (req, res) => {
    const { idVideogame } = req.params;
    const allGames = await gamesSaved();
    try {
        const game = await getGameById(idVideogame, allGames);
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//ESTA RUTA CREA UN NUEVO VIDEOJUEGO
videogamesRouter.post('/', validatePostData, async (req, res) => {
    const { name, description, platforms, background_image, released, rating, genres, createdInDb } = req.body;
    try {
        const gameCreated = await postGame( name, description, platforms, background_image, released, rating, genres, createdInDb );
        res.status(200).json(gameCreated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports=videogamesRouter;
