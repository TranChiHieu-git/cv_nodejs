const express = require('express');
const router = express.Router();
const homeRouter = require('../../../controllers/homepage/index');

router.get("/", homeRouter.index);

module.exports = router;