const express = require('express');
const { listAllHirings, insertNewtHirings } = require('../controllers/hiringController');
const validateHiringFields = require('../middlewares/hiringValidations');
const hiringRouter = express.Router();

hiringRouter.get('/listHirings', listAllHirings);
hiringRouter.post('/insertHirings', validateHiringFields, insertNewtHirings);

module.exports = hiringRouter;