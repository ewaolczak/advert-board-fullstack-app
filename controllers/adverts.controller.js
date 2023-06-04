const Advert = require('../models/advert.model');

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
    const { title, content, price, localisation, seller } = req.body;
    if (
      title &&
      typeof title === 'string' &&
      content &&
      typeof content === 'string' &&
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
        price: price,
        localisation: localisation,
        seller: seller
      });
      await newAdvert.save();
      res.status(200).send({ message: 'OK' });
    } else {
      res.status(400).send({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

exports.put = async (req, res) => {
  try {
    const { title, content, price, localisation, seller } = req.body;
    const adv = await Advert.findById(req.params.id);
    if (adv) {
      if (
        title &&
        typeof title === 'string' &&
        content &&
        typeof content === 'string' &&
        price &&
        typeof price === 'string' && // WHY??? w modelu number, a tu string...
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
              price: price,
              localisation: localisation,
              seller: seller
            }
          }
        );
        res.status(200).send({ message: 'OK' });
      } else res.status(400).send({ message: 'Bad request' });
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
