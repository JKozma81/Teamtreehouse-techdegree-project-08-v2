const Sequelize = require('sequelize');
const dataConnection = require('../util/databaseConnection');

const Book = dataConnection.define('Book', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Title is required!'
			}
		}
	},
	author: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: {
				msg: 'Author is required!'
			}
		}
	},
	genre: {
		type: Sequelize.STRING
	},
	year: {
		type: Sequelize.INTEGER,
		validate: {
			notEmpty: {
				msg: 'Year must be a number!'
			}
		}
	},
	createdAt: false
});

module.exports = Book;
