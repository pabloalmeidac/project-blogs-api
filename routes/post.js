const express = require('express');
const validatePost = require('../middlewares/validatePost');
const validateEditPost = require('../middlewares/validateEditPost');

const { create, getAll, getById, update } = require('../controllers/postController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', auth, validatePost, create);
router.get('/', auth, getAll);
router.get('/:id', auth, getById);
router.put('/:id', auth, validateEditPost, update);

module.exports = router;