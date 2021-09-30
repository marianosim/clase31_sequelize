const db = require('../database/models/index.js');
const Op = db.Sequelize.Op;

const controller = {
    list: (req, res) => {
        db.genres.findAll()
            .then(genres => {
                res.render('genresList', {genres:genres})
            })
    },
    detail: (req, res) => {
        db.genres.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail', {genre:genre})
            })
    },
};

module.exports = controller;