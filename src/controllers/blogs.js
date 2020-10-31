const blogsRouter = require('express').Router();

const Blog = require('../models/blog');

blogsRouter.get('/', (req, res, next) => {
  Blog.find({})
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = blogsRouter;
