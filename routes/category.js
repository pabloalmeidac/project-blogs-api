const express = require('express');
const validateCategory = require('../middlewares/validateCategory');
const { create, getAll } = require('../controllers/categoryController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', validateCategory, auth, create);
router.get('/', auth, getAll);

module.exports = router;