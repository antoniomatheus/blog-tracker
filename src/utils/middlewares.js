const logger = require('./logger');

const errorHandler = (error, req, res, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return res.status(400).json({ error: 'Malformatted id' });
  } else if (error.name === 'Validation Error') {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = {
  errorHandler,
};
