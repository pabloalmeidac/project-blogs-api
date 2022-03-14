const express = require('express');
const validateCategory = require('../middlewares/validateCategory');
const { create } = require('../controllers/categoryController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', validateCategory, auth, create);

module.exports = router;