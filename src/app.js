const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./utils/config');
const logger = require('./utils/logger');
const middlewares = require('./utils/middlewares');
const blogsRouter = require('./controllers/blogs');

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('Connect to MongoDB');
  })
  .catch((error) => {
    logger.error('Failed to connect to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Blog Tracker system');
});
app.use('/api/blogs', blogsRouter);
app.use(middlewares.errorHandler);

module.exports = app;
