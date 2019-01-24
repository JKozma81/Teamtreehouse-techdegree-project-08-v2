const Book = require('../models/book');

const state = {
	menuTitle: '',
	bookData: {},
	paginationLinks: 1
};

// Render the core content for the home page
exports.getHomePageContent = (req, res, next) => {
	res.render('index');
};

// Render the core layout for the home page
exports.getHomePageLayout = (req, res, next) => {
	Book.findAll()
		.then((books) => {
			state.bookData = books;
			state.menuTitle = 'Books';
			res.locals.data = state;
			res.render('layout');
		})
		.catch((err) => {
			console.error(err);
		});
};

// Render the core layout for the new book page
exports.getNewBookPage = (req, res, next) => {
	state.menuTitle = 'New Book';
	state.errorData = [];
	state.bookData = {};
	isTitleMissing = false;
	isAuthorMissing = false;
	res.locals.data = state;
	res.render('new-book');
};

// Render the core layout for the book details page
exports.getDetailsPage = (req, res, next) => {
	Book.findByPk(parseInt(req.params.bookId, 10))
		.then((book) => {
			state.menuTitle = 'Update Book';
			state.bookData = book;
			res.locals.data = state;
			res.render('update-book');
		})
		.catch((err) => {
			console.error(err);
		});
};

// Adding new book to the database
exports.addNewBook = (req, res, next) => {
	const title = req.body.title,
		author = req.body.author,
		genre = req.body.genre,
		year = isNaN(parseInt(req.body.year, 10)) ? null : parseInt(req.body.year, 10);
	Book.create({
		title,
		author,
		genre,
		year
	})
		.then(() => {
			res.redirect('/books');
		})
		.catch((err) => {
			console.error(err.message);
		});
};

// Manage book data changes
exports.modifyBook = (req, res, next) => {
	const updatedBookTitle = req.body.title,
		updatedBookAuthor = req.body.author,
		updatedBookGenre = req.body.genre,
		updatedBookYear = isNaN(parseInt(req.body.year, 10)) ? null : parseInt(req.body.year, 10);

	Book.findByPk(parseInt(req.params.bookId, 10))
		.then((book) => {
			book.title = updatedBookTitle;
			book.author = updatedBookAuthor;
			book.genre = updatedBookGenre;
			book.year = updatedBookYear;
			return book.save();
		})
		.then(() => {
			res.redirect('/books');
		})
		.catch((err) => {
			console.error(err);
		});
};

// Deleting book from the database
exports.deletingBook = (req, res, next) => {
	console.log(req.params.bookId);
	Book.findByPk(parseInt(req.params.bookId, 10))
		.then((book) => {
			return book.destroy();
		})
		.then(() => {
			res.redirect('/books');
		})
		.catch((err) => {
			console.error(err);
		});
};
