const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('online_learning', 'ol_user', 'ol_user_123', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
