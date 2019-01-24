const express = require('express');

const router = express.Router();

// Importinging home page controller
const homepage = require('../controllers/homePage');

// Render the home page
router.get('/books', homepage.getHomePageLayout, homepage.getHomePageContent);
// Render base layout for the new book page
router.get('/books/new', homepage.getNewBookPage);
// Manage adding a new book to the database
router.post('/books/new', homepage.addNewBook)
// Render the book details page
router.get('/books/:bookId', homepage.getDetailsPage);
// Handle book modification
router.post('/books/:bookId', homepage.modifyBook);
// Deleting book from the database
router.post('/books/:bookId/delete', homepage.deletingBook)

module.exports = router;
