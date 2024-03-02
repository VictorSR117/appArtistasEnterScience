const express = require('express');
const artistsRouter = require('./artistsRoutes');
const hiringRouter = require('./hiringRoutes');

const router = express.Router();

router.use(artistsRouter);
router.use(hiringRouter);

module.exports = router;