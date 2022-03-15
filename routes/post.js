const express = require('express');
const validatePost = require('../middlewares/validatePost');
const { create } = require('../controllers/postController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/', validatePost, auth, create);
/* router.get('/', auth, getAll); */

module.exports = router;