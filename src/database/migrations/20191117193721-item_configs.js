'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items_configs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      relId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user-repo-item',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      posX: {
        type: Sequelize.REAL,
        allowNull: true
      },
      posY: {
        type: Sequelize.REAL,
        allowNull: true
      },
      posZ: {
        type: Sequelize.REAL,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items_configs');
  }
};
