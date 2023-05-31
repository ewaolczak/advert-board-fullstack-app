const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const { login, password, phone } = req.body;
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string' &&
      phone &&
      typeof phone === 'string' //dlaczego tutaj jest string a w modelu number??
    ) {
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        return res.status(409).send({ message: 'User with this login already exists' });
      }

      const user = await User.create({
        login,
        password: await bcrypt.hash(password, 10),
        phone
      });
      res.status(201).send({ message: `Created user ${user.login}` });
    } else {
      res.status(400).send({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (login && typeof login === 'string' && password && typeof password === 'string') {
      const user = await User.findOne({ login });
      if (!user) {
        res.status(400).send({ message: 'Login or password is incorrect' });
      }
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        res.status(200).send({ message: 'Login successful' });
      } else {
        res.status(400).send({ message: 'Login or password is incorrect' });
      }
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
