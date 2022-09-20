const db = require('../database/models/index')

const movies = {
    list: async (req,resp) => {

        const moviesList = await db.Pelicula.findAll()
        

        resp.render('moviesList', {movies: moviesList});
    },

    detail: async (req,resp) => {
        
        const id = req.params.id;
      
        const movieDetail = await db.Pelicula.findByPk(id)

        resp.render('moviesDetail', {movie: movieDetail});
    },

    new: async (req,resp) => {

        const moviesList = await db.Pelicula.findAll(
            {
                order: [["release_date", "DESC"]]
            }
        )

        resp.render('newestMovies', {movies: moviesList});
    },

    recomended: async (req,resp)=> {

        const moviesList = await db.Pelicula.findAll(
            {
                order: [["rating", "Desc"]],
                limit: 5
            }
        )
        
        resp.render('recommendedMovies', {movies: moviesList})

    },

    create: async (req,resp) => {

        const {...pelicula} = req.body
        

        const resultado = await db.Pelicula.create(pelicula)
        
        resp.redirect('/movies');
    },

    edit: async (req,resp) => {
        
       const {...datosEditados} = req.body
      
        const id = req.params.id;

        const resultado = await db.Pelicula.update(datosEditados, {where: {id: id}})

        resp.redirect('/movies');

    },
    delete: async (req,resp) => {

       
        const id = req.params.id;

        try{
            const resultado = await db.Pelicula.destroy({where: {id: id}})

            resp.redirect('/movies');
        }catch(error)
        {
            resp.json(error.message);
        }
       
    },

    editDetails: async (req,resp) => {
        
        const id = req.params.id;
      
        const movieDetail = await db.Pelicula.findByPk(id)

        resp.render('moviesEdit', {Movie: movieDetail});
    },

    deleteInfo: async (req,resp) => {
        
        const id = req.params.id;
      
        const movieDetail = await db.Pelicula.findByPk(id)

        resp.render('moviesDelete', {Movie: movieDetail});
    }
}

module.exports = movies;