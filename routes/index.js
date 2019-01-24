const express = require('express');

const router = express.Router();

// Redirecting to the books page
router.get('/', (req, res, next) => {
  res.redirect('/books');
})

module.exports = router;