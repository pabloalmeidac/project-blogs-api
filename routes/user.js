const express = require('express');
const validateUser = require('../middlewares/validateUser');
const auth = require('../middlewares/auth');
const { create, getAll, getById } = require('../controllers/userController');

const router = express.Router();

router.post('/', validateUser, create);
router.get('/', auth, getAll);
router.get('/:id', auth, getById);

module.exports = router;