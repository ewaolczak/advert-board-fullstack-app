const ExampleAdverts = require('./models/advert.model');
const ExampleUsers = require('./models/user.model');

const loadExampleData = async () => {
  const exampleAdverts = [
    {
      title: 'Flower in a pot',
      content:
        'For sale a stylish flower in a pot. Blooms in spring. Requires no special care.',
      date: '2023-06-04',
      image: 'potted_flower_img.jpg',
      price: 75,
      localisation: 'Gdansk',
      user: 'amanda.clark'
    },
    {
      title: 'A unique teapot',
      content: 'A unique teapot for sale. Ideal for tea, especially green tea.',
      date: '2023-05-29',
      image: 'mug_img.jpg',
      price: 45,
      localisation: 'Szczecin',
      user: 'jane.doe'
    },
    {
      title: 'Soft-scented candle',
      content: 'Subtle-scented candle in glass',
      date: '2023-06-10',
      image: 'candle_img.jpg',
      price: 50,
      localisation: 'Warsaw',
      user: 'john.doe'
    }
  ];
  const exampleUsers = [
    {
      login: 'amanda.clark',
      password: 'tester1',
      avatar: 'amanda_clark_avatar.jpg',
      phone: '111111111'
    },
    {
      login: 'john.doe',
      password: 'tester2',
      avatar: 'john_doe_avatar.jpg',
      phone: '222222222'
    },
    {
      login: 'jane.doe',
      password: 'tester3',
      avatar: 'jane_doe_avatar.jpg',
      phone: '333333333'
    }
  ];

  let userId = null;

  try {
    let counterUsers = await ExampleUsers.countDocuments();
    if (counterUsers === 0) {
      console.log('No users. Loading example data...');
      const users = await ExampleUsers.create(exampleUsers);
      console.log('Test users data has been successfully loaded');
      userId = users[0]._id;
    }
  } catch (err) {
    console.log(`Couldn't load test users data`, err);
  }

  try {
    let counterAdverts = await ExampleAdverts.countDocuments();
    if (counterAdverts === 0) {
      console.log('No adverts. Loading example data...');
      await ExampleAdverts.create(
        exampleAdverts.map((advert) => ({ ...advert, user: userId }))
      );
      console.log('Test adverts data has been successfully loaded');
    }
  } catch (err) {
    console.log(`Couldn't load test adverts data`, err);
  }
};

module.exports = loadExampleData;
