const { Router } = require("express");
const { getGenres } = require("../controllers/genresControllers/getGenres");

const genderRouter = Router();

//ESTA RUTA TRAE LA INFO DE TODOS LOS VIDEOJUEGOS POR GENERO
genderRouter.get('/', async (req, res) => {
    try {
        const genres = await getGenres();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports=genderRouter;