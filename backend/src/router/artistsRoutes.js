const express = require('express');
const { listAllArtistsByName, detailOneArtist } = require('../controllers/artistsController');
const { validateArtistId } = require('../middlewares/artistValidations');
const artistsRouter = express.Router();

artistsRouter.get('/listArtists', listAllArtistsByName);
artistsRouter.get('/detailArtist', validateArtistId, detailOneArtist);

module.exports = artistsRouter;