const Advert = require('../models/advert.model');
const User = require('../models/user.model');
const getImageFileType = require('../utils/getImageFileType');
const fs = require('fs-extra');

exports.getAll = async (req, res) => {
  try {
    res.json(
      await Advert.find().populate({
        path: 'user',
        model: 'User',
        select: '-password'
      })
    );
  } catch (err) {
    console.log('get all adverts err - ', err);
    res.status(500).send({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const adv = await Advert.findById(req.params.id).populate('user');
    if (!adv) res.status(404).send({ message: 'Not found' });
    else res.json(adv);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.post = async (req, res) => {
  try {
    const { title, content, date, price, localisation, userLogin } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    if (
      title &&
      typeof title === 'string' &&
      content &&
      typeof content === 'string' &&
      date &&
      typeof date === 'string' &&
      req.file &&
      ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(
        fileType
      ) &&
      price &&
      typeof price === 'string' &&
      localisation &&
      typeof localisation === 'string'
    ) {
      const user = await User.findOne({ login: userLogin });
      console.log(user);
      if (!user) throw new Error('No user'); //! (!!user) doesn't work

      const userId = user._id.toString();

      const newAdvert = new Advert({
        title: title,
        content: content,
        date: date,
        image: req.file.filename,
        price: price,
        localisation: localisation,
        user: userId
      });
      const imagePath = `./public/uploads/${req.file.filename}`;
      const imageDir = `./public/uploads/${userId}/${req.file.filename}`;
      fs.moveSync(imagePath, imageDir, (err) => {
        if (err) {
          console.log(err);
        }
      });
      await newAdvert.save();
      res.status(200).send({ message: 'OK' });
    } else {
      fs.unlinkSync(`./public/uploads/${req.file.filename}`);
      return res.status(400).send({ message: 'Bad request' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err });
  }
};

exports.put = async (req, res) => {
  try {
    const { title, content, date, price, localisation, user } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    const adv = await Advert.findById(req.params.id);
    if (adv) {
      if (
        title &&
        typeof title === 'string' &&
        content &&
        typeof content === 'string' &&
        date &&
        typeof date === 'string' &&
        req.file &&
        ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(
          fileType
        ) &&
        price &&
        typeof price === 'string' &&
        localisation &&
        typeof localisation === 'string'
      ) {
        await Advert.updateOne(
          { _id: req.params.id },
          {
            $set: {
              title: title,
              content: content,
              date: date,
              image: req.file.filename,
              price: price,
              localisation: localisation,
              user: req.session.id
            }
          }
        );
        const imagePath = `./public/uploads/${req.file.filename}`;
        const imageDir = `./public/uploads/${req.session.id}/${req.file.filename}`;
        fs.moveSync(imagePath, imageDir, (err) => {
          if (err) {
            console.log('exports.put controller error', err);
          }
        });
        res.status(200).send({ message: 'OK' });
      } else {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
        return res.status(400).send({ message: 'Bad request' });
      }
    } else res.status(404).send({ message: 'Not found' });
  } catch (err) {
    console.log('exports.put controller', err);
    res.status(500).send({ message: err });
  }
};

exports.removeImage = async (req, res) => {
  const { id } = req.params;
  try {
    const advert = await Advert.findById(id);

    const fileDir = `./public/uploads/${advert.user.toString()}/${
      advert.image
    }`;
    const isFileExists = await fs.exists(fileDir);
    if (advert.image && isFileExists) {
      await fs.unlinkSync(fileDir);
    }

    await Advert.findByIdAndUpdate(id, { image: '' });
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.delete = async (req, res) => {
  try {
    const adv = await Advert.findById(req.params.id);
    if (adv) {
      await Advert.deleteOne({ _id: req.params.id });
      res.send({ message: 'OK' });
    } else res.status(404).send({ message: 'Not found' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.searchPhrase = async (req, res, next) => {
  const { searchPhrase } = req.params;
  try {
    const adv = await Advert.find({
      title: { $regex: searchPhrase, $options: 'i' }
    });
    if (!adv) return res.status(404).json({ message: 'Ad not found' });
    else res.json(adv);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
