const sequelize = require('../config/database');
const Enrollment = sequelize.define('Enrollment', {});

User.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(User, { through: Enrollment });

module.exports = { User, Course, Enrollment };