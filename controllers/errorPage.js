// Create error message
exports.createError = (req, res, next) => {
  const err = new Error('Page not found!');
  err.status= 404;
  next(err);
};

// Render error message layout
exports.getError = (err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.error(err.status, err.message)
  res.render('../views/error.pug');
};