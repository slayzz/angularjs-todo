const mongoose = require('mongoose');

const initDB = () => {
  mongoose.connect('mongodb://0.0.0.0', {
    user: 'user',
    pass: 'password',
    dbName: 'todoapp',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', () => {
    console.log('connected to mongo db');
  });
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
};

module.exports = initDB;
