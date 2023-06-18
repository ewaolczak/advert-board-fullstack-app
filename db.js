const mongoose = require('mongoose');

// func for loading example data
// const loadExampleData = require('./exampleData');

const connectToDB = () => {
  //connect to db
  const NODE_ENV = process.env.NODE_ENV;
  let dbUri = '';

  if (NODE_ENV === 'production') dbUri = process.env.DB_URL;
  else if (NODE_ENV === 'test')
    dbUri = 'mongodb://localhost:27017/advertsDBtest';
  else dbUri = 'mongodb://localhost:27017/advertsDB';

  mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  // on success
  db.once('open', () => {
    console.log('Connect to the database');
    // loadExampleData();
  });

  // on error
  db.on('error', (err) => console.log(`Error: ${err}`));
};

module.exports = connectToDB;
