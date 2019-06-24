'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('issues', { 
          id: {
              type: Sequelize.INTEGER,
              primarykey: true,
              autoIncrement: true,
          },
          createdAt: Sequelize.DATE,
          updatedAt: Sequelize.DATE,
          type: Sequelize.INTEGER,
          details: Sequelize.TEXT,
          userName: Sequelize.STRING,
          userContact: Sequelize.STRING,
          // geom: Sequelize.GEOMETRY('POINT', 4326),
          geom: Sequelize.GEOMETRY('POINT'),
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('issues');
  }
};
