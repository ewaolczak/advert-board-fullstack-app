const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const connectToDB = require('./db');

// start express server
const app = express();
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
});

// connect to DB
connectToDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'xyz456',
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/advertsDB' }),
    resave: false,
    saveUninitialized: false
  })
);

app.use(express.static(path.join(__dirname, '/client/build')));
// app.use(express.static(path.join(__dirname, '/public')));

// add routes
app.use('/auth', require('./routes/auth.routes'));

app.use((req, res) => {
  res.status(404).send({ message: 'Page not found...' });
});

module.exports = server;
