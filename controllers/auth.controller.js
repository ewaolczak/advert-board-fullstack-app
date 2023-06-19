const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const getImageFileType = require('../utils/getImageFileType');
const fs = require('fs-extra');

exports.register = async (req, res) => {
  try {
    const { login, password, phone } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string' &&
      req.file &&
      ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(
        fileType
      ) &&
      phone &&
      typeof phone === 'string'
    ) {
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        const tempImageDir = `./public/uploads/${req.file.filename}`;
        const isExist = fs.existsSync(tempImageDir);
        if (isExist) {
          fs.unlinkSync(tempImageDir);
        }
        return res
          .status(409)
          .send({ message: 'User with this login already exists' });
      }

      const user = await new User({
        login,
        password: await bcrypt.hash(password, 10),
        avatar: req.file.filename,
        phone
      });

      //move file
      const imagePath = `./public/uploads/${req.file.filename}`;
      const imageDir = `./public/uploads/${user._id}/${req.file.filename}`;
      fs.moveSync(imagePath, imageDir, (err) => {
        if (err) {
          console.log(err);
        }
      });

      //update avatar src
      await user.save();
      console.log(user.save);

      res.status(201).send({ message: `Created user ${user.login}` });
    } else {
      fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      res
        .status(400)
        .fs.unlinkSync(`./public/uploads/${req.file.filename}`)
        .send({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string'
    ) {
      const user = await User.findOne({ login });
      if (!user) {
        res.status(400).send({ message: 'Login or password are incorrect' });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.login = user.login;
          res.status(200).send({ message: `Login successful. User: ${login}` });
        } else {
          res.status(400).send({ message: 'Login or password is incorrect' });
        }
      }
    } else {
      res.status(400).send({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).send({ message: err });
    console.log(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    if (req.session.login) {
      res.send({ message: `Yeah! I'm logged! Login: ${req.session.login}` });
    } else {
      res.status(401).send({ message: 'You are not authorized' });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.logout = async (req, res) => {
  try {
    console.log(req.session);
    req.session.destroy();
    console.log(req.session);
    res.send({ message: 'You have been logout' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
