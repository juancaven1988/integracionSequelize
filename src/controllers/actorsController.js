const db = require('../database/models/index')


const actors = {
    list: async (req,resp) => {

        const actorsList = await db.Actor.findAll()
        

        resp.render('actorsList', {actors: actorsList});
    },

    detail: async (req,resp) => {
        
        const id = req.params.id;
        let movie = null
        const actorDetail = await db.Actor.findByPk(id)
        console.log(actorDetail)
        if(actorDetail.favorite_movie_id != null)
        {
            movie = await db.Pelicula.findByPk(actorDetail.favorite_movie_id);
        }
        

        resp.render('actorsDetail', {actor: actorDetail, movie: movie});
    }
}

module.exports = actors