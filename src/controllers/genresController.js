const db = require('../database/models/index')


const genres = {
    list: async (req,resp) => {

        const genresList = await db.Genero.findAll()
        

        resp.render('genresList', {genres: genresList});
    },

    detail: async (req,resp) => {
        
        const id = req.params.id;
      
        const genreDetail = await db.Genero.findByPk(id)

        resp.render('genresDetail', {genre: genreDetail});
    }
}

module.exports = genres