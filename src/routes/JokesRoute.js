const express = require('express');
const router = express.Router();

const JokesController = require('../controllers/JokesController')

router.post('/next',JokesController.getNextJoke)

module.exports = router;