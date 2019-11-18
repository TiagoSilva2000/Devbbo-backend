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
      rel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'user-repo-item',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      pos_x: {
        type: Sequelize.REAL,
        allowNull: true
      },
      pos_y: {
        type: Sequelize.REAL,
        allowNull: true
      },
      pos_z: {
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
