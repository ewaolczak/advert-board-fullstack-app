const multer = require('multer');
// const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    const [name, ext] = file.originalname.split('.');
    // cb(null, `${name}-${req.body.login}.${ext}`);
    cb(null, `${name}-${Date.now()}.${ext}`);
  }
});

const imageUpload = multer({ storage, limits: {fileSize: 1048576} }); //1MB

module.exports = imageUpload;
