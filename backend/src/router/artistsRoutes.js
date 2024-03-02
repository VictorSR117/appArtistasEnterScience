const express = require('express');
const { listAllArtistsByName } = require('../controllers/artistsController');
const artistsRouter = express.Router();

artistsRouter.get('/listArtists', listAllArtistsByName);

module.exports = artistsRouter;