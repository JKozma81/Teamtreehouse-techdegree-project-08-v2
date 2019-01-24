// Importing extress
const express = require('express');
// Importing body-parser
const bodyParser = require('body-parser');
// Importing path modul
const path = require('path');
// Importing database connection config
const sequelize = require('./util/databaseConnection');

// Creating the server
const app = express();

// Initializing body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up the public folder for static files and linking it to the static route
app.use(express.static(path.join(__dirname, 'public')));

// Setting the view engine to pug templating
app.set('view engine', 'pug');

// Importing the middlewares for the appropriate routes
const home = require('./routes/index');
const books = require('./routes/books');

// Importing Error page controller
//const error = require('./controllers/errorPage')

// Setting up the routes
app.use(home);
app.use(books);

// Helper middleware to create error
// app.use(error.createError);

// Error handling middleware
// app.use(error.getError);

const PORT = process.env.PORT || 3000;

// Synching the database and starting the server
sequelize.sync().then(() => {
	app.listen(PORT, console.log(`Server is started on port ${PORT} and listening...`));
});
