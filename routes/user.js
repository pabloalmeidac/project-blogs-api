const express = require('express');
const validateUser = require('../middlewares/validateUser');
const { create } = require('../controllers/userController');

const router = express.Router();

router.post('/', validateUser, create);

module.exports = router;