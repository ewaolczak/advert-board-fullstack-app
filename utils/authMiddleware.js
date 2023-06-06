const authMiddleware = (req, res, next) => {
  if (req.session.id) {
    next();
  } else {
    res.status(401).send({ message: 'You are not authorized' });
  }
};

module.exports = authMiddleware;
