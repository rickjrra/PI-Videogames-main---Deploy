// Definición de la función validatePostData que actúa como middleware
const validatePostData = (req, res, next) => {
    // Extrae datos del cuerpo de la solicitud (req.body)
    const { name, description, platforms, background_image, released, rating, genres } = req.body;

    // Comprueba si el campo 'name' está presente y no está vacío
    if (!name) {
        return res.status(400).json({ error: 'Please enter a name' });
    }
    // Comprueba si el campo 'description' está presente y no está vacío
    else if (!description) {
        return res.status(400).json({ error: 'Please enter a description' });
    }
    // Comprueba si la matriz 'platforms' tiene al menos un elemento
    else if (platforms.length === 0) {
        return res.status(400).json({ error: 'Please enter platforms' });
    }
    // Comprueba si el campo 'background_image' está presente y no está vacío
    else if (!background_image) {
        return res.status(400).json({ error: 'Please enter an image' });
    }
    // Comprueba si el campo 'released' está presente y no está vacío
    else if (!released) {
        return res.status(400).json({ error: 'Please enter a released date' });
    }
    // Comprueba si el campo 'rating' está presente y no está vacío
    else if (!rating) {
        return res.status(400).json({ error: 'Please enter a rating' });
    }
    // Comprueba si el campo 'genres' está presente y no está vacío
    else if (!genres) {
        return res.status(400).json({ error: 'Please enter a genre' });
    }
    // Comprueba si la matriz 'genres' tiene al menos un elemento
    else if (genres.length === 0) {
        return res.status(400).json({ error: 'Please enter a genre' });
    }

    // Si todas las comprobaciones pasan sin errores, llama a 'next()' para continuar con el siguiente middleware o ruta.
    next();
};

module.exports = {
    validatePostData,
};