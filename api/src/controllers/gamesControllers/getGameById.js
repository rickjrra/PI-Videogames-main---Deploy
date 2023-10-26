const axios = require("axios");
const { apiInfoClean, getDbGameById } = require("../../utils");
const { API_KEY } = process.env

const getGameById = async (idVideogame) => {
    if(Number(idVideogame)){
        const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        const game = response.data;
        const apiGame = apiInfoClean(game);
        return apiGame;
    }else if(!Number(idVideogame)){
        const dbGame = await getDbGameById(idVideogame);
        return dbGame;
    }else{
        throw Error('404 videogame not found');
    }

};

const getGameByName = async (name) => {
    const dbGames = await getDbGameByName(name);
    const apiReq = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
    const apiGames = apiReq.data.results.map((game) => apiInfoClean(game));
    const allGames = dbGames.concat(apiGames);


    let allGamesFound = [];

    for (let i = 0; i < 15; i++) {
        allGamesFound.push(allGames[i]);
    }

    if (allGamesFound.length !== 0) {
        return allGamesFound;
    } else {
        throw Error('404 NOT FOUND: please try with other name');
    }
};



module.exports={
    getGameById,
};