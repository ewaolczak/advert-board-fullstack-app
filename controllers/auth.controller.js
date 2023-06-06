const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const getImageFileType = require('../utils/getImageFileType');
const fs = require('fs-extra');

exports.register = async (req, res) => {
  try {
    const { login, password, phone } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    // console.log(req.body, req.file);
    if (
      login &&
      typeof login === 'string' &&
      password &&
      typeof password === 'string' &&
      req.file &&
      ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(fileType) &&
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
        return res.status(409).send({ message: 'User with this login already exists' });
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
        // .fs.unnlinkSync(`./public/uploads/${req.file.filename}`)
        .send({ message: 'Bad request' });
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
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          const user = { login: req.session.login, id: req.session._id };
          res.status(200).send({ message: `Login successful. User: ${login}` });
          // .redirect(`/ads/`);
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
  res.send({ message: "Yeah! I'm logged!" });
  if (req.session.login) {
    res.send({ login: req.session.login });
  } else {
    res.status(401).send({ message: 'You are not authorized' });
  }
};

exports.logout = async (req, res) => {
  try {
    req.session.destroy();
    res.send({ message: 'You have been logout' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
