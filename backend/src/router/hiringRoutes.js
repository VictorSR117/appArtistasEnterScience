const express = require('express');
const { listAllHirings, insertNewtHirings, detailOneHiring } = require('../controllers/hiringController');
const { validateHiringFields, validateHiringId } = require('../middlewares/hiringValidations');
const hiringRouter = express.Router();

hiringRouter.get('/listHirings', listAllHirings);
hiringRouter.get('/detailHiring', validateHiringId, detailOneHiring);
hiringRouter.post('/insertHirings', validateHiringFields, insertNewtHirings);

module.exports = hiringRouter;