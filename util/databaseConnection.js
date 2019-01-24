// Import sequelize for database operations
const Sequelize = require('sequelize');

// Creating and configuring database connection
const sequelize = new Sequelize('Books', 'root', null, {
	host: 'localhost',
	dialect: 'sqlite',
	operatorsAliases: false,
	storage: './db/library.db'
});

module.exports = sequelize;
