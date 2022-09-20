const express = require('express');
const movies = require('../controllers/moviesController');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/edit/:id', moviesController.editDetails);
router.get('/movies/delete/:id', moviesController.deleteInfo);
router.get('/movies/add', (req,res)=> {res.render('moviesAdd')});
router.post('/movies/create', moviesController.create);
router.post('/movies/update/:id', moviesController.edit);
router.delete('/movies/delete/:id', moviesController.delete);


module.exports = router;