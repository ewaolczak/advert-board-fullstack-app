const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')
const path = require('path')
const connectToDB = require('./db')

// start express server
const app = express()
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running...');
})

// connect to DB
connectToDB()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/client/build')));
// app.use(express.static(path.join(__dirname, '/public')));

// add routes
app.use('/auth', require('./routes/auth.routes'))

app.use((req, res) => {
  res.status(404).send({ message: 'Page not found...' });
});

module.exports = server