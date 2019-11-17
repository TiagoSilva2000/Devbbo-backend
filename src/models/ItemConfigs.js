const {Model, DataTypes} = require('sequelize');

class ItemConfigs extends Model {
  static init(sequelize) {
    super.init({
        posX: DataTypes.REAL,
        posY: DataTypes.REAL,
        posZ: DataTypes.REAL
    }, {
      sequelize,
      tableName: 'items_configs'
    })

  }

  static associate(models) {
    this.belongsTo(models.UserRepoItem, {foreignKey: 'relId', as: 'userRepoItem'});
  }

}

module.exports = ItemConfigs;