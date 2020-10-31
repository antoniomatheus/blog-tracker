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

blogsRouter.post('/', (req, res, next) => {
  const newBlog = new Blog(req.body);
  newBlog
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = blogsRouter;
