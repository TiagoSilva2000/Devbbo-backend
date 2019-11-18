const {Model, DataTypes} = require('sequelize');

class ItemConfigs extends Model {
  static init(sequelize) {
    super.init({
        pos_x: DataTypes.REAL,
        pos_y: DataTypes.REAL,
        pos_z: DataTypes.REAL
    }, {
      sequelize,
      tableName: 'items_configs'
    })

  }

  static associate(models) {
    this.belongsTo(models.UserRepoItem, {foreignKey: 'rel_id', as: 'userRepoItem'});
  }

}

module.exports = ItemConfigs;