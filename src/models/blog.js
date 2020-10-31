/* eslint-disable no-underscore-dangle */
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

blogSchema.set('toJSON', {
  transform: (document, currentObject) => {
    const returnedObject = { ...currentObject };
    delete returnedObject.__v;
    return returnedObject;
  },
});

module.exports = mongoose.model('Blog', blogSchema);
