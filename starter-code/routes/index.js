const express = require('express');
const router  = express.Router();
const Post = require('../models/post');

/* GET home page. */
router.get('/', (req, res, next) => {
  const user = req.user;
  Post.find()
  .then(posts => {
    res.render('index', { title: 'Lista de posts', user, posts })
  })
  .catch(e => console.log(e))
});

module.exports = router;