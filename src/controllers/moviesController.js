const db = require('../database/models/index.js')
const Op = db.Sequelize.Op;

const controller = {
    list: (req, res) => {
        db.movies.findAll()
            .then(movies => {
                res.render('moviesList', {movies:movies})
            })
    },
    detail: (req, res) => {
        db.movies.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail', {movie: movie})
            })
    },
    new: (req, res) => {
        db.movies.findAll({
            order: [
                ['release_date', 'DESC'],
            ]
        })
            .then(movies => {
                res.render('newestMovies', {movies : movies})
            })
    },
    recommend: (req, res) => {
        db.movies.findAll({
            where: {
                rating: {[Op.lte]: 10}
            },
            order: [
                ['rating', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('recommendedMovies', {movies:movies})
            })
    }
}


module.exports = controller