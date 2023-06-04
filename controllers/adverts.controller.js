const Advert = require('../models/advert.model');
const getImageFileType = require('../utils/getImageFileType');
const fs = require('fs');

exports.getAll = async (req, res) => {
  try {
    res.json(await Advert.find());
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const adv = await Advert.findById(req.params.id);
    if (!adv) res.status(404).send({ message: 'Not found' });
    else res.json(adv);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.post = async (req, res) => {
  try {
    const { title, content, date, price, localisation, seller } = req.body;
    const fileType = req.file ? await getImageFileType(req.file) : 'unknown';
    if (
      title &&
      typeof title === 'string' &&
      content &&
      typeof content === 'string' &&
      date &&
      typeof date === 'string' &&
      req.file &&
      ['image/png', 'image/jpg', 'image/gif'].includes(fileType) &&
      price &&
      typeof price === 'string' && // WHY??? w modelu number, a tu string...
      localisation &&
      typeof localisation === 'string' &&
      seller &&
      typeof seller === 'string'
    ) {
      const newAdvert = new Advert({
        title: title,
        content: content,
        date: date,
        image: req.file.filename,
        price: price,
        localisation: localisation,
        seller: seller
      });
      await newAdvert.save();
      res.status(200).send({ message: 'OK' });
    } else {
      if (res.status(400)) {
        if (req.file) {
          fs.unlinkSync(`./public/uploads/${req.file.filename}`);
        }
        return res.send({ message: 'Bad request' });
      }
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.put = async (req, res) => {
  try {
    const { title, content, date, price, localisation, seller } = req.body;
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
        ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(fileType) &&
        price &&
        typeof price === 'string' && //! WHY??? w modelu number, a tu string...
        localisation &&
        typeof localisation === 'string' &&
        seller &&
        typeof seller === 'string'
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
              seller: seller
            }
          }
        );
        res.status(200).send({ message: 'OK' });
      } else {
        fs.unlinkSync(`./public/uploads/${req.file.filename}`);
        return res.status(400).send({ message: 'Bad request' });
      }
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    const adv = await Advert.findById(req.params.id);
    if (adv) {
      await Advert.deleteOne({ _id: req.params.id });
      res.send({ message: 'OK' });
    } else res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
