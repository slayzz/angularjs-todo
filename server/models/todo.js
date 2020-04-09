const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  text: String,
});

module.exports = mongoose.model('Todo', TodoSchema);
