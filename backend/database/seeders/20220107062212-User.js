'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'DemoUser1@aa.io',
        userName: 'DemoUser1',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'DemoUser2@aa.io',
        userName: 'DemoUser2',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'DemoUser3@aa.io',
        userName: 'DemoUser3',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'DemoUser4@aa.io',
        userName: 'DemoUser4',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
